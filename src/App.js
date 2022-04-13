import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Gifts from "./Gifts";
import "./App.css";

function App() {
  const [gifts] = useState(Gifts);
  return (
    <Container className="p-5">
      <h2>Currencies</h2>
      <div className="count">
        {gifts.map((item) => (
          <Card style={{ width: "18rem" }} key={item.id}>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <div className="count">
                {item.currencies.map((arrayItem, index) => (
                  <p className="m-3 p-2 " key={index}>
                    {arrayItem}
                  </p>
                ))}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default App;

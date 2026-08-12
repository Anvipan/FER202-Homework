import React from "react";
import Container from "react-bootstrap/esm/Container";

export default function ProductCard() {
  return (
    <Container fluid>
      <div class="card" style={{ width: 18 }}>
        <img src="images/nam1.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </Container>
  );
}

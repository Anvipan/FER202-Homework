import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { product } from "../data";

export default function ProductList({products, onAddToCart}) {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold">FEATURED PRODUCTS</h2>
      <Row className="g-4">
        {product.map((item, index) => (
          <Col key={index} xs={12} md={4} lg={3}>
            <ProductCard item={item} onAddToCart={onAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
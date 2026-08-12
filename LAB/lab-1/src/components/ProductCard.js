import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

export default function ProductCard({ item, onAddToCart }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={item.image} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className="text-danger fw-bold fs-5">
          {item.price.toLocaleString('vi-VN')}đ
        </Card.Text>
        <Card.Text>{item.description}</Card.Text>

        <div className="mt-auto">
          {item.stock > 0 ? (
            <>
              <Badge bg="success" className="mb-2">Còn hàng ({item.stock})</Badge>
              <Button 
                variant="primary" 
                className="w-100" 
                onClick={() => onAddToCart(item.id)}
              >
                Add to cart
              </Button>
            </>
          ) : (
            <>
              <Badge bg="secondary" className="mb-2">Hết hàng</Badge>
              <Button variant="secondary" className="w-100" disabled>Out of Stock</Button>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
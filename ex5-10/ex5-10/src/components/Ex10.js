import React from "react";
import { Container, Row, Col, Navbar, Nav, Form, Button, Card, Badge } from "react-bootstrap";

export default function Ex10() {
  const pizzas = [
    { id: 1, name: "Margherita Pizza", old: "20.00", new: "14.00", sale: true, image: "/images/margherita.png" },
    { id: 2, name: "Mushroom Pizza", old: "22.00", new: "17.00", sale: false, image: "/images/mushroom.png" },
    { id: 3, name: "Hawaiian Pizza", old: "19.00", new: "16.00", sale: true, image: "/images/hawaiian.png" },
    { id: 4, name: "Pesto Pizza", old: "23.00", new: "17.00", sale: true, image: "/images/pesto.png" },
  ];

  return (
    <div style={{ backgroundColor: "#333", color: "#fff", minHeight: "100vh", paddingBottom: "50px" }}>
      
      <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom border-secondary">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">Pizza House</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home" className="active">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Form className="d-flex ms-3">
                <Form.Control type="search" placeholder="Search" className="bg-dark text-white border-secondary rounded-0" />
                <Button variant="danger" className="rounded-0 px-3"><i className="fa fa-search"></i></Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="position-relative w-100">
        <img 
          src="images/neanpolitanPizza.png" 
          alt="Banner" 
          className="w-100" 
          style={{ height: "400px", objectFit: "cover" }} 
        />
        <div 
          className="position-absolute top-50 start-50 translate-middle text-center p-4 w-75" 
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <h1 className="fw-bold text-white display-4 mb-2">Neapolitan Pizza</h1>
          <p className="text-white fs-5 mb-0">Authentic Italian taste in every bite</p>
        </div>
      </div>

      <Container className="my-5 pt-4">
        <h2 className="text-center mb-5 fw-bold">Our Menu</h2>
        <Row className="g-4">
          {pizzas.map((item) => (
            <Col md={3} key={item.id}>
              <Card className="bg-dark text-white border-secondary h-100 position-relative rounded-0 shadow">
                {item.sale && (
                  <Badge bg="warning" className="position-absolute top-0 start-0 m-2 text-dark rounded-0 px-2 py-1">
                    SALE
                  </Badge>
                )}
                <Card.Img variant="top" src={item.image} className="rounded-0" />
                
                <Card.Body className="text-center d-flex flex-column">
                  <Card.Title className="fs-6 fw-bold mb-3">{item.name}</Card.Title>
                  <Card.Text className="mb-4">
                    <span className="text-muted text-decoration-line-through me-2">${item.old}</span>
                    <span className="text-warning fw-bold fs-5">${item.new}</span>
                  </Card.Text>
                  <Button variant="dark" className="border-secondary w-100 mt-auto rounded-0">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5 pt-4" style={{ maxWidth: '800px' }}>
        <h2 className="text-center mb-5 fw-bold">Book Your Table</h2>
        <Form>
          <Row className="mb-4">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Your Name *</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" className="bg-dark text-white border-secondary rounded-0" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Date *</Form.Label>
                <Form.Control type="date" className="bg-dark text-white border-secondary rounded-0" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Select a Service *</Form.Label>
                <Form.Select className="bg-dark text-white border-secondary rounded-0">
                  <option>Choose service...</option>
                  <option value="1">Dine-in</option>
                  <option value="2">Takeaway</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          
          <Form.Group className="mb-4">
            <Form.Label>Please share your message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Write your message..." className="bg-dark text-white border-secondary rounded-0" />
          </Form.Group>
          
          <div className="text-center">
            <Button variant="warning" className="text-dark fw-bold px-5 rounded-0">Send Message</Button>
          </div>
        </Form>
      </Container>

    </div>
  );
}
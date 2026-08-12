import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Header({cartCount}) {
  return (
    <div className="Navbar">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="images/logo.jpg"
              width="100"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="Navigation-bar flex flex-row">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Men</Nav.Link>
            <Nav.Link href="#pricing">Women</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link href="#cart" className="position-relative ms-3">
              <MdOutlineShoppingCart size={20} />
              <span
                className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.65rem", fontWeight: 500 }}
              >
                {cartCount}
              </span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

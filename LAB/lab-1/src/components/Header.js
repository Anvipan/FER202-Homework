import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Header() {
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
            <MdOutlineShoppingCart style={{marginTop: 13}}/>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

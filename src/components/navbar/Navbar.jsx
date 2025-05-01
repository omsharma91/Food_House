import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-success ">
      <Container fluid>
        <Navbar.Brand className="text-dark bg-white rounded fw-bold	" href="#">
          Food__House
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav className="d-flex gap-5 text-decoration-none">
          <Link to={"/"} className="text-decoration-none text-white">
            <li>Home</li>
          </Link>
          <Link to={"/menu"} className="text-decoration-none text-white">
            <li>Menu</li>
          </Link>
          <Link to={"/about"} className="text-decoration-none text-white">
            <li>About</li>
          </Link>
          <Link to={"/register"} className="text-decoration-none text-white">
            <li>Login</li>
          </Link>
        </Nav>
        <Form className="d-flex">
          <Button variant="outline-primary" className="text-white">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Navbarr;

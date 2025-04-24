import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-success ">
      <Container fluid>
        <Navbar.Brand className="text-dark bg-white rounded fw-bold	" href="#">Food__House</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav className="d-flex gap-5 ">
          <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
          <Nav.Link href="#action2" className="text-white">Menu</Nav.Link>
          <Nav.Link href="#action2" className="text-white">About</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Button variant="outline-primary" className="text-white">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Navbarr;

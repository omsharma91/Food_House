import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "../../App";
import { signOut } from "firebase/auth";
import { auth } from "../../confg/auth";

function Navbarr() {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext(myContext);
  const { loginData, setLoginData } = useContext(myContext);

  async function handelLogOut() {
    try {
      await signOut(auth);
      setLoginData(null);
      alert("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("failed to log out error:", error);
    }
  }

  return (
    <Navbar expand="lg" className="bg-success" sticky="top">
      <Container fluid>
        <Navbar.Brand className="text-dark bg-white rounded fw-bold" href="/">
          Food__House
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-lg-0 d-flex gap-5 align-items-center" navbarScroll>
            <Link to="/" className="ms-4 text-decoration-none text-white">Home</Link>
            <Link to="/menu" className="text-decoration-none text-white">Menu</Link>
            <Link to="/about" className="text-decoration-none text-white">About</Link>

            {loginData ? (
              <span
                className="text-white logout cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={handelLogOut}
              >
                Logout
              </span>
            ) : (
              <Link to="/register" className="text-decoration-none text-white">
                Login
              </Link>
            )}

            {loginData?.photoURL ? (
              <Link to="/profile">
                <img
                  src={loginData.photoURL}
                  alt="profile"
                  className="logo rounded-circle"
                  style={{ width: "35px", height: "35px" }}
                />
              </Link>
            ) : (
              <span className="text-white">Guest</span>
            )}

            <Link to="/cart" className="text-decoration-none text-white">
              <i className="fa-solid fa-cart-plus fs-5"></i>
            </Link>
          </Nav>

          <Form className="d-flex gap-2 mt-3 mt-lg-0">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link to="/search">
              <Button variant="outline-light" className="text-white">
                Search
              </Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;

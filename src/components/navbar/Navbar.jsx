import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "../../App";
import { signOut } from "firebase/auth";
import { auth } from "../../confg/auth";

function Navbarr() {
  const {searchTerm, setSearchTerm} = useContext(myContext);
  const { loginData, setLoginData } = useContext(myContext);
  async function handelLogOut() {
    try {
      await signOut(auth);
      setLoginData(null);
      alert("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("failed to logged out error:", error);
    }
  }
  return (
    <Navbar expand="lg" className="bg-success ">
      <Container fluid>
        <Navbar.Brand className="text-dark bg-white rounded fw-bold	" href="/">
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
          <div>
            {loginData ? (
              <li
                className="text-decoration-none text-white logout"
                onClick={handelLogOut}
              >
                Logout
              </li>
            ) : (
              <Link
                className="text-decoration-none text-white"
                to={"/register"}
              >
                Login
              </Link>
            )}
          </div>
          <div className="text-decoration-none text-style-none text-white ">
            {loginData?.photoURL ? (
              <Link to={"/profile"}>
                <img
                  src={loginData.photoURL}
                  alt=""
                  className="logo rounded-circle"
                />
              </Link>
            ) : (
              <li className="rounded-circle ">Guest</li>
            )}
          </div>
          <Link to={"/cart"} className="text-decoration-none text-white">
            <li>
              <i className="fa-solid fa-cart-plus"></i>
            </li>
          </Link>
        </Nav>
        <Form className="d-flex gap-3">
          <input
            type="text"
            className="rounded"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to={"/search"}>
            <Button variant="outline-primary" className="text-white">
              Search
            </Button>
          </Link>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Navbarr;

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Logo from "../component/Logo"
import StartNavbar from "./StartNavbar"
import EndNavbar from "./EndNavbar"

function NavbarNetflix() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid={true}>
        <Navbar.Brand href="#">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <StartNavbar />
          </Nav>
          <Nav className="d-flex flex-row align-items-center">
            <EndNavbar />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarNetflix

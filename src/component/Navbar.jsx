import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Logo from "../component/Logo"
import StartNavbar from "./StartNavbar"
import EndNavbar from "./EndNavbar"

function NavbarNetflix() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid={true} className="p-0">
        <Navbar.Brand href="#">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border border-light me-2 d-flex d-lg-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list text-light"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <StartNavbar />
          </Nav>
          <Nav
            className="d-flex flex-row align-items-center justify-content-end gap-3
          "
          >
            <EndNavbar />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarNetflix

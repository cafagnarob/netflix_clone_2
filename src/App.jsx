import "bootstrap/dist/css/bootstrap.min.css"
import NavbarNetflix from "./component/Navbar"
import { Container, Row, Col } from "react-bootstrap"
import Title from "./component/Title"
import NetflixCarousel from "./component/NetflixCarousel"
function App() {
  return (
    <>
      <header>
        <Container fluid={true} className="p-0">
          <Row>
            <Col className="p-0">
              <NavbarNetflix />
            </Col>
          </Row>
        </Container>
      </header>
      <main className="bg-dark min-vh-100">
        <Container fluid={true}>
          <Row>
            <Title />
          </Row>
          <Row className="d-flex flex-column">
            <Col className="d-flex flex-row col-1 col-md-6 col-lg-12">
              <NetflixCarousel title={"Trending Now"} movie={"avatar"} />
            </Col>
            <Col>
              <NetflixCarousel title={"Watch It Again"} movie={"Avenger"} />
            </Col>
            <Col>
              <NetflixCarousel title={"New Releases"} movie={"Star Wars"} />
            </Col>
          </Row>
        </Container>
      </main>
      <footer></footer>
    </>
  )
}

export default App

import "bootstrap/dist/css/bootstrap.min.css"
import NavbarNetflix from "./component/Navbar"
import { Container, Row, Col } from "react-bootstrap"
import Title from "./component/Title"
import NetflixCarousel from "./component/NetflixCarousel"
import NetflixFooter from "./component/NetflixFooter"
function App() {
  return (
    <>
      <header>
        <Container fluid={true}>
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

          <NetflixCarousel title={"Trending Now"} movie={"batman"} />

          <NetflixCarousel title={"Watch It Again"} movie={"pokemon"} />

          <NetflixCarousel title={"New Releases"} movie={"Star Wars"} />
        </Container>
      </main>
      <footer>
        <Container
          fluid={true}
          className="d-flex justify-content-center pt-5 bg-dark"
        >
          <NetflixFooter />
        </Container>
      </footer>
    </>
  )
}

export default App

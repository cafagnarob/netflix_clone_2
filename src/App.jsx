import "bootstrap/dist/css/bootstrap.min.css"
import NavbarNetflix from "./component/Navbar"
import { Container, Row, Col } from "react-bootstrap"

import NetflixFooter from "./component/NetflixFooter"
import NetflixSettign from "./component/NetflixSetting"
import NetflixProfile from "./component/NetflixProfile"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./component/Home"
import Serietv from "./component/Serietv"
import FilmDetails from "./component/FilmDetails"
function App() {
  return (
    <BrowserRouter>
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/setting" element={<NetflixSettign />} />
            <Route path="/profile" element={<NetflixProfile />} />
            <Route path="/serietv" element={<Serietv />} />
            <Route path="/:imdbID" element={<FilmDetails />} />
          </Routes>
        </main>
        <footer>
          <FilmDetails />
          <Container
            fluid={true}
            className="d-flex justify-content-center pt-5 bg-dark"
          >
            <NetflixFooter />
          </Container>
        </footer>
      </>
    </BrowserRouter>
  )
}

export default App

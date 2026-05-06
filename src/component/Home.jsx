import { Container, Row } from "react-bootstrap"
import Title from "./Title"
import NetflixCarousel from "./NetflixCarousel"

const Home = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Title />
      </Row>
      <NetflixCarousel title={"Trending Now"} movie={"batman"} />
      <NetflixCarousel title={"Watch It Again"} movie={"pokemon"} />
      <NetflixCarousel title={"New Releases"} movie={"Star Wars"} />
    </Container>
  )
}
export default Home

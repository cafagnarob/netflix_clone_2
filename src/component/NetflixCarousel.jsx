import { Component } from "react"
import { Alert, Carousel, Col, Row } from "react-bootstrap"
import NetflixSpinner from "./navbar/Spinner"
const ApiLink = "http://www.omdbapi.com/?apikey=9006942d&s="

class NetflixCarousel extends Component {
  state = {
    film: [],
    loading: true,
    error: null,
  }

  getfilm = () => {
    fetch(ApiLink + this.props.movie)
      .then((response) => {
        if (response.ok) {
          return response.json()
          // linea 18 test per errore forzato
          //   throw new Error("Errore forzato")
        } else {
          throw new Error("errore nella fetch")
        }
      })
      .then((data) => {
        this.setState({ film: data.Search || [], loading: false })
        console.log(data.Search)
      })
      .catch((err) => {
        console.log("errore cath", err)
        this.setState({ loading: false, error: err.message })
      })
  }

  componentDidMount() {
    this.getfilm()
  }

  render() {
    const primoCaro = this.state.film.slice(0, 6)
    const secondoCaro = this.state.film.slice(4, 10)
    if (this.state.loading === true) {
      return (
        <div
          className="d-flex justify-content-center"
          style={{
            margin: "250px 0",
          }}
        >
          <NetflixSpinner />
        </div>
      )
    } else {
      return (
        <div className="mt-3 mb-2 ">
          {this.state.error && (
            <Alert variant="danger">
              <Alert.Heading>Errore nel caricamento dei film</Alert.Heading>
              <hr />
              <p className="mb-0">{this.state.error}</p>
            </Alert>
          )}
          <h3 className="text-light">{this.props.title}</h3>
          <Carousel className=" d-flex">
            <Carousel.Item>
              <Row className="g-1 row-cols-1 row-cols-sm-2 row-cols-lg-6">
                {primoCaro.map((film) => {
                  return (
                    <Col key={film.imdbID}>
                      <div
                        className="d-block w-100"
                        style={{
                          height: "300px",
                          overflow: "hidden",
                          borderRadius: "4px",
                        }}
                      >
                        <img
                          className="w-100 h-100 img-fluid"
                          src={film.Poster}
                          alt={film.Title}
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </Col>
                  )
                })}
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="g-1 row-cols-1 row-cols-sm-2 row-cols-lg-6">
                {secondoCaro.map((film) => {
                  return (
                    <Col key={film.imdbID}>
                      <div
                        className="d-block w-100"
                        style={{
                          height: "300px",
                          overflow: "hidden",
                          borderRadius: "4px",
                        }}
                      >
                        <img
                          className="w-100 h-100 img-fluid"
                          src={film.Poster}
                          alt={film.Title}
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </Col>
                  )
                })}
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      )
    }
  }
}

export default NetflixCarousel

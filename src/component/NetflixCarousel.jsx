import { Component } from "react"
import { Carousel, Col, Row } from "react-bootstrap"
import NetflixSpinner from "./navbar/Spinner"
const ApiLink = "http://www.omdbapi.com/?apikey=9006942d&s="

class NetflixCarousel extends Component {
  state = {
    film: [],
    loading: true,
  }

  getfilm = () => {
    fetch(ApiLink + this.props.movie)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nella fethc")
        }
      })
      .then((data) => {
        this.setState({ film: data.Search || [], loading: false })
        console.log(data.Search)
      })
      .catch((err) => {
        console.log("errore cath", err)
        this.setState({ loading: false })
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
                          key={film.imdbID}
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
                          key={film.imdbID}
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

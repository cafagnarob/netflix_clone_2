import { Component } from "react"
import { Carousel, Col, Row } from "react-bootstrap"
const ApiLink = "http://www.omdbapi.com/?apikey=9006942d&s="

class NetflixCarousel extends Component {
  state = {
    film: [],
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
        this.setState({ film: data.Search })
        console.log(data.Search)
      })
      .catch((err) => {
        console.log("errore cath", err)
      })
  }

  ArrayFilm = (array, size) => {
    const result = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size))
    }
    return result
  }

  componentDidMount() {
    this.getfilm()
  }

  render() {
    // const gruppoDiFilm = this.ArrayFilm(this.state.film, 8)
    const primoCaro = this.state.film.slice(0, 6)
    const secondoCaro = this.state.film.slice(4, 10)
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

export default NetflixCarousel

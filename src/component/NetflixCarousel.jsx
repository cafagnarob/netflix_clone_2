import { Component } from "react"
import { Carousel, Col } from "react-bootstrap"
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
    const gruppoDiFilm = this.ArrayFilm(this.state.film, 5)
    return (
      <div className="mt-3 mb-2">
        <h3 className="text-light">{this.props.title}</h3>
        <Carousel>
          {gruppoDiFilm.map((films, i) => {
            return (
              <Carousel.Item key={i}>
                {films.map((film) => (
                  <img
                    key={film.imdbID}
                    src={film.Poster}
                    alt={film.Title}
                    style={{
                      width: "255px",
                      height: "170px",
                      flex: "0 0 auto",
                      marginRight: "10px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    )
  }
}

export default NetflixCarousel

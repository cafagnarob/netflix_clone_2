import { Component } from "react"
import { Carousel } from "react-bootstrap"
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
        console.log(data)
        this.setState({ film: data.Search })
      })
      .catch((err) => {
        console.log("errore cath", err)
      })
  }

  componentDidMount() {
    this.getfilm()
  }

  render() {
    return (
      <div>
        <h3 className="text-light">{this.props.title}</h3>
        <Carousel>
          {this.state.film.map((film) => {
            return (
              <Carousel.Item key={film.imdbID}>
                <img
                  className="d-block w-100"
                  src={film.Poster}
                  alt={film.Title}
                />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    )
  }
}

export default NetflixCarousel

import { useEffect, useState } from "react"
import { Alert, Carousel, Col, Row } from "react-bootstrap"
import NetflixSpinner from "./navbar/Spinner"

import { useNavigate } from "react-router-dom"
const ApiLink = "http://www.omdbapi.com/?apikey=9006942d&s="

const NetflixCarousel = (props) => {
  const navigate = useNavigate()
  const [state, setState] = useState({ film: [], loading: true, error: null })

  const getfilm = () => {
    fetch(ApiLink + props.movie)
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
        setState({ film: data.Search || [], loading: false })
        console.log(data.Search)
      })
      .catch((err) => {
        console.log("errore cath", err)
        setState({ loading: false, error: err.message })
      })
  }

  useEffect(() => {
    getfilm()
  }, [])

  const primoCaro = state.film.slice(0, 6)
  const secondoCaro = state.film.slice(4, 10)
  if (state.loading === true) {
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
        {state.error && (
          <Alert variant="danger">
            <Alert.Heading>Errore nel caricamento dei film</Alert.Heading>
            <hr />
            <p className="mb-0">{state.error}</p>
          </Alert>
        )}
        <h3 className="text-light">{props.title}</h3>
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
                      onClick={() => {
                        navigate("/" + film.imdbID)
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
                      onClick={() => {
                        navigate("/" + film.imdbID)
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

export default NetflixCarousel

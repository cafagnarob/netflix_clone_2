import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Card, Col, ListGroup, Row } from "react-bootstrap"
const ApiLink = "http://www.omdbapi.com/?apikey=9006942d&i="

const FilmDetails = () => {
  const [film, setFilm] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { imdbID } = useParams()
  console.log("oggetto params", imdbID)

  useEffect(() => {
    fetch(ApiLink + imdbID)
      .then((res) => {
        if (!res.ok) throw new Error("errore HTTP")
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setFilm(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [imdbID])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <Row className="d-flex justify-content-center">
      <Col className="col-12 col-sm-8 col-md-6 col-lg-4">
        <Card>
          <Card.Img variant="top" src={film.Poster} />
          <Card.Body className="bg-black">
            <Card.Title className="text-light fw-bold">{film.Title}</Card.Title>
            <Card.Text className="text-light">{film.Plot}</Card.Text>
            <ListGroup>
              {film.Ratings.map((c) => {
                return (
                  <ListGroup.Item
                    key={c.id}
                    className="text-light bg-dark border-0"
                  >
                    {c.Source} - {c.Value}
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
export default FilmDetails

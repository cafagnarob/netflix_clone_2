import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Card, Col, ListGroup, Row } from "react-bootstrap"
const ApiLink = "http://www.omdbapi.com/?apikey=9006942d&i="
const ApiLinkComment = "https://striveschool-api.herokuapp.com/api/comments/"

const FilmDetails = () => {
  const [film, setFilm] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [comments, setComments] = useState(null)
  const { imdbID } = useParams()
  console.log("oggetto params", imdbID)

  const getFilm = () => {
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
  }

  const getComment = () => {
    fetch(ApiLinkComment + imdbID, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWY5ZTVjYjU0YTMxNTAwMTU1OGIxYjEiLCJpYXQiOjE3NzgwNzgyODMsImV4cCI6MTc3OTI4Nzg4M30.FYH_IvOF9ve0AfaXWsR63A8vKXHU_oXLBjNrolOBpoQ",
      },
    })
      .then((res) => {
        if (res.ok) return res.json()
      })
      .then((data) => {
        console.log(data)
        setComments(data)
      })
      .catch((err) => {
        console.log("errore", err)
      })
  }

  useEffect(() => {
    getFilm()
    getComment()
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
              {comments.map((c, i) => {
                return (
                  <ListGroup.Item
                    key={i}
                    className="text-light bg-dark border-0"
                  >
                    {c.comment} - {c.rate}
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

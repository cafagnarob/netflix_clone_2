import { Col } from "react-bootstrap"
import NetflixButton from "./ButtonNetflix"

const Title = () => {
  return (
    <>
      <Col className="col-6 d-flex flex-row my-3">
        <h2 className="text-light me-3">TV Show</h2>
        <NetflixButton text={"Genres"} />
      </Col>

      <Col className="col-6 d-flex flex-row justify-content-end my-3">
        <NetflixButton text={"icona1"} />
        <NetflixButton text={"icona2"} />
      </Col>
    </>
  )
}
export default Title

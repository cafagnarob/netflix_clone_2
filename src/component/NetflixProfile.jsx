import { Container, Row, Col, Button, Form } from "react-bootstrap"
import Avatar from "./Avatar"
import AccountPhoto from "../assets/Netflix-assets/assets/avatar.png"
import Dropdown from "react-bootstrap/Dropdown"
import NetflixButton from "./ButtonNetflix"

const NetflixProfile = () => {
  return (
    <Container fluid={true}>
      <Row className="d-flex justify-content-center text-light">
        <Col className="col-4">
          <h1 style={{ fontSize: "60px", fontWeight: 200 }}>Edit Profile</h1>
          <hr />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col className="col-12 col-lg-1 d-flex justify-content-center d-lg-block me-0 me-lg-5">
          <div className="position-relative">
            <Avatar
              img={AccountPhoto}
              size={"165px"}
              margin={"m-3 m-md-3 m-lg-0"}
            />
          </div>
        </Col>
        <Col className="col col-12 col-lg-3 d-flex flex-column align-items-center d-lg-block text-light ms-0 ms-lg-5">
          <input type="text" class="w-50 w-md-100" />
          <div>
            <p class="mb-1 mt-3 text-light">Language:</p>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="btn bg-transparent border-1 border-light rounded-0"
            >
              English
            </Dropdown.Toggle>

            <Dropdown.Menu className="bg-dark border-1 border-light rounded-0">
              <Dropdown.Item href="#" className="text-light">
                Italian
              </Dropdown.Item>
              <Dropdown.Item href="#" className="text-light">
                Chinese
              </Dropdown.Item>
              <Dropdown.Item href="#" className="text-light">
                French
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <hr />
          <p>Maturity Settings:</p>
          <Button variant="secondary" className="border-0 fw-bold rounded-0">
            ALL MATURITY RATINGS
          </Button>
          <p>Show title of all maturity ratings for this profile.</p>
          <NetflixButton text={"EDIT"} />
          <hr />
          <p>Autoplay controls</p>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={type}
                  id={`default-${type}`}
                  label={`Autoplay next episode in a series on all devices`}
                />
              </div>
            ))}
          </Form>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={type}
                  id={`default-${type}`}
                  label={`Autoplay preview while browsing on all devices`}
                />
              </div>
            ))}
          </Form>
        </Col>
      </Row>
      <Row className="d-flex justify-content-lg-center">
        <Col className="col-12 col-lg-4 text-light ">
          <hr class="mt-3" />
          <div className="gap-5 d-flex justify-content-center">
            <NetflixButton text={"SAVE"} />
            <NetflixButton text={"CANCEL"} />
            <NetflixButton text={"DELETE PROFILE"} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default NetflixProfile

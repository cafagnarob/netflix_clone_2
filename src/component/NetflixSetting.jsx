import { Button, Col, Container, Row } from "react-bootstrap"
import Avatar from "./Avatar"
import AccountPhoto from "../assets/Netflix-assets/assets/avatar.png"

const NetflixSettign = () => {
  return (
    <Container>
      <Row className="text-light">
        <Col className="col-12 d-flex justify-content-center d-md-block">
          <h1 className="mt-3">Account</h1>
        </Col>
        <hr />
        <Col className="col-12 col-md-4 d-flex align-content-center flex-column align-items-center align-items-lg-start mb-5">
          <h5 class="text-secondary fw-light">MEMBERSHIP & BILLING</h5>
          <Button
            variant="light"
            className="border-0 px-4 py-2 w-50 rounded-0"
            style={{ fontSize: "0.7em" }}
          >
            Cancel Membership
          </Button>
        </Col>
        <Col className="col-12 col-md-8">
          <div class="d-flex flex-row justify-content-between flex-wrap">
            <p>student@strive.school</p>
            <p class="text-primary">Change account email</p>
          </div>
          <div class="d-flex flex-row justify-content-between flex-wrap">
            <p>Password: ********</p>
            <p class="text-primary">Change password</p>
          </div>
          <div class="d-flex flex-row justify-content-between flex-wrap">
            <p>Phone: 321 044 1279</p>
            <p class="text-primary">Change phone number</p>
          </div>
          <hr />
          <div class="d-flex flex-row justify-content-between flex-wrap">
            <div class="d-flex flex-row">
              <ion-icon name="logo-paypal"></ion-icon>
              <p>
                <strong>PayPal</strong> admin@strive.school
              </p>
            </div>
            <p class="text-primary">Update payment info</p>
          </div>
          <div class="d-flex flex-row justify-content-end flex-wrap">
            <p class="text-primary">Billing details</p>
          </div>
          <hr />
          <div class="d-flex flex-row justify-content-end flex-wrap">
            <p class="text-primary">Redeem gift card or promo code</p>
          </div>
          <div class="d-flex flex-row justify-content-end flex-wrap">
            <p class="text-primary">Where to buy gift cards</p>
          </div>
          <hr />
        </Col>
        <Col className="col-4">
          <h5 class="text-secondary fw-light">PLAN DETAILS</h5>
        </Col>
        <Col className="col-5 col-xl-2">
          <p class="fw-bold">
            Premium
            <span class="fw-normal rounded-1 border border-1 border-light px-1">
              ULTRA <strong>HD</strong>
            </span>
          </p>
        </Col>
        <Col className="col-3 col-xl-6 d-flex justify-content-end flex-wrap">
          <p class="text-primary">Change plan</p>
        </Col>
        <hr />
        <Col className="col-4">
          <h5 class="text-secondary fw-light">SETTINGS</h5>
        </Col>
        <Col className="col-8 d-flex flex-column align-items-end flex-wrap">
          <p class="text-primary">Parental controls</p>
          <p class="text-primary">Test participation</p>
          <p class="text-primary">Manage download devices</p>
          <p class="text-primary">Activate a device</p>
          <p class="text-primary">Recent device streaming activity</p>
          <p class="text-primary">Sign out of all devices</p>
        </Col>
        <hr />
        <Col className="col-4">
          <h5 class="text-secondary fw-light">MY PROFILE</h5>
        </Col>
        <Col className="col-4">
          <div className="d-flex flex-column d-md-block">
            <Avatar
              icon={<strong className="ms-2">Strive Student</strong>}
              img={AccountPhoto}
              size={"70px"}
            />
          </div>
        </Col>
        <Col className="col-4 d-flex flex-column align-items-end flex-wrap">
          <p class="text-primary">Manage profiles</p>
          <p class="text-primary">Add profile email</p>
        </Col>
        <Col className="col-4 offset-4">
          <p class="text-primary">Language</p>
          <p class="text-primary">Playback settings</p>
          <p class="text-primary">Subtitle appearance</p>
        </Col>
        <Col className="Col-4">
          <p class="text-primary">Viewing activity</p>
          <p class="text-primary">Ratings</p>
        </Col>
      </Row>
    </Container>
  )
}
export default NetflixSettign

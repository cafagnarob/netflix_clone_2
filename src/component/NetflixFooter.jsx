import { Button, Col, Row } from "react-bootstrap"

const NetflixFooter = () => {
  return (
    <Row>
      <Col className="col-12">
        <div className=" mb-2">
          {/* icone facebook */}
          <svg
            className="me-2"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="#808080"
              fillRule="evenodd"
              d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0Z"
            />
          </svg>
          {/* icona instagram */}
          <svg
            className="mx-2"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 42 42"
          >
            <path
              fill="#808080"
              d="M8.53 21.5c0 6.609 5.36 11.971 11.97 11.971c6.609 0 11.971-5.361 11.971-11.971c0-1.04.029-2 .029-3h3v15c0 1.98-1.02 3-3 3h-25c-1.98 0-3-1.02-3-3v-15h4c0 1 .03 1.96.03 3zM.5 6.68v29.64c0 3.369 1.81 5.18 5.18 5.18h29.64c3.369 0 5.18-1.811 5.18-5.18V6.68c0-3.369-1.811-5.18-5.18-5.18H5.68C2.31 1.5.5 3.311.5 6.68zM12.56 21.5c0-4.39 3.55-7.939 7.94-7.939a7.932 7.932 0 0 1 7.939 7.939a7.931 7.931 0 0 1-7.939 7.939a7.932 7.932 0 0 1-7.94-7.939zM29.5 8c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-3c-.83 0-1.5-.67-1.5-1.5V8z"
            />
          </svg>
          {/*  icona X  */}
          <svg
            className="mx-2"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 432 384"
          >
            <path
              fill="#808080"
              d="M383 105v11q0 45-16.5 88.5t-47 79.5t-79 58.5T134 365q-73 0-134-39q10 1 21 1q61 0 109-37q-29-1-51.5-18T48 229q8 2 16 2q12 0 23-4q-30-6-50-30t-20-55v-1q19 10 40 11q-39-27-39-73q0-24 12-44q33 40 79.5 64T210 126q-2-10-2-20q0-36 25.5-61.5T295 19q38 0 64 27q30-6 56-21q-10 31-39 48q27-3 51-13q-18 26-44 45z"
            />
          </svg>
          {/*  icone Youtube  */}
          <svg
            className="mx-2"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 1024 768"
          >
            <path
              fill="#808080"
              d="M928 736q-222 32-416 32q-86 0-190-8t-165-16l-61-8q-27-5-47.5-37.5t-30-78.5t-14-86T0 461V307Q0 52 96 32Q318 0 512 0q86 0 190 8t165 16l61 8q29 4 49.5 36.5T1007 148t13 86t4 73v154q0 36-3 73t-12 85t-30 80t-51 37zM693 359L431 199q-11-10-29-5.5T384 208v352q0 11 18 15t29-6l262-160q11-10 11-25t-11-25z"
            />
          </svg>
        </div>
      </Col>
      <Col
        className="col-12 col-sm-6 col-md-3"
        style={{ fontSize: "15px", lineHeight: "25px" }}
      >
        <div id="list_sevice">
          <ul className="list-unstyled text-secondary">
            <li>Audio and Subtitles</li>
            <li>Media Canter</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </Col>
      <Col
        className="col-12 col-sm-6 col-md-3"
        style={{ fontSize: "15px", lineHeight: "25px" }}
      >
        <div id="list_sevice_2">
          <ul className="list-unstyled text-secondary">
            <li>Audio Description</li>
            <li>Investor Relation</li>
            <li>Legal Notices</li>
          </ul>
        </div>
      </Col>
      <Col
        className="col-12 col-sm-6 col-md-3"
        style={{ fontSize: "15px", lineHeight: "25px" }}
      >
        <div id="list_sevice_3">
          <ul className="list-unstyled text-secondary">
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
      </Col>
      <Col
        className="col-12 col-sm-6 col-md-3"
        style={{ fontSize: "15px", lineHeight: "25px" }}
      >
        <div id="list_sevice_4">
          <ul className="list-unstyled text-secondary">
            <li>Gift Card</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
      </Col>
      <Col>
        <Button
          variant="outline-light"
          className="text-secondary border-secondary rounded-0 mb-2"
        >
          Service Code
        </Button>
        <p className="text-secondary"> 1997-2019 Netflix, Inc.</p>
      </Col>
      {/* <Col className="col-12">
        <Button
          style="font-size: 10px; line-height: 20px"
          class="btn text-secondary btn-outline-secondary rounded-0"
          type="submit"
        >
          Service Code
        </Button>

        <p style="font-size: 10px; line-height: 20px" class="text-secondary">
          &copy 1997-2019 Netflix, Inc.{}
        </p>
      </Col> */}
    </Row>
  )
}
export default NetflixFooter

import { Nav } from "react-bootstrap"
import Avatar from "./Avatar"
const EndNavbar = () => {
  return (
    <>
      <Nav.Link href="#" className="text-light">
        {" "}
        LENTE
      </Nav.Link>
      <Nav.Link href="#" className="text-light">
        Bambini
      </Nav.Link>
      <Nav.Link href="#" className="text-light">
        DVD
      </Nav.Link>
      <Nav.Link href="#" className="text-light">
        CAMPANELLA
      </Nav.Link>
      <Nav.Link href="#" className="text-light">
        <Avatar />
      </Nav.Link>
    </>
  )
}
export default EndNavbar

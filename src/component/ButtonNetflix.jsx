import Button from "react-bootstrap/Button"

const NetflixButton = ({ text, icon }) => {
  return (
    <Button
      variant="dark"
      className="rounded-0 border border-light d-flex align-items-center"
      style={{ height: "fit-content" }}
    >
      {text}
      {icon}
    </Button>
  )
}
export default NetflixButton

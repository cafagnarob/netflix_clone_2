import Button from "react-bootstrap/Button"

const NetflixButton = ({ text }) => {
  return (
    <Button variant="dark" className="rounded-0 border border-light">
      {text}
    </Button>
  )
}
export default NetflixButton

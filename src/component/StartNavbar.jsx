import { Link } from "react-router-dom"
const StartNavbar = () => {
  return (
    <>
      <Link to="/" className="text-light nav-link">
        Home
      </Link>
      <Link to="/serietv" className="text-light  nav-link">
        Serie TV
      </Link>
      <Link to="" className="text-light nav-link">
        Film
      </Link>
      <Link to="" className="text-light nav-link">
        Nuovi e popolari
      </Link>
      <Link to="" className="text-light nav-link">
        La mia lista
      </Link>
    </>
  )
}
export default StartNavbar

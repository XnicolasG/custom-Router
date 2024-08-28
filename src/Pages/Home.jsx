import { Link } from "../components/Link"


export default function HomePage  () {
    return(
      <>
      <h1>Home</h1>
      <p>App de ejemplo para crear react router</p>
      <Link to='/about'>Sobre nosotros</Link>
      </>
    )
  }
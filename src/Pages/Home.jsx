import { Link } from "../Link"




export const HomePage = () =>{
    return(
      <>
      <h1>Home</h1>
      <p>App de ejemplo para crear react router</p>
      <Link to='/about'>Sobre nosotros</Link>
      </>
    )
  }
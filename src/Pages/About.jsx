import { Link } from "../Link"

export const AboutPage = () => {
    return (
      <>
      <h1>About</h1>
      <div>
        <img src="https://unavatar.io/XnicolasG" alt="Foto xnicolasg" />
        <p> ¡Hola! soy Nicolás y este es un clon de React Router </p>
      </div>
      <Link to="/"> Home</Link>
      </>
    )
  }
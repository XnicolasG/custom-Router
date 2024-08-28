import { Link } from "../components/Link"

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: '¡Hola! soy Nicolás y este es un clon de React Router',
    button: 'Inicio'
  },
  en: {
    title: 'About us',
    description: 'Hi! I am Nicolás and this is a React Router clone',
    button: 'Home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src="https://unavatar.io/XnicolasG" alt="Foto xnicolasg" />
        <p> {i18n.description} </p>
      </div>
      <Link to="/"> {i18n.button} </Link>
    </>
  )
}
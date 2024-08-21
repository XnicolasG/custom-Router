
import { HomePage } from "./Pages/Home";
import { AboutPage } from "./Pages/About";
import { Router } from "./Router";
import { Page404 } from "./Pages/404";

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/search/:query',
    component: () => <h1>Buscador</h1>
  }
]


function App() {
  return (
   <main>
    <Router routes={routes} defaultComponent={Page404} />
   </main>
  )
}

export default App

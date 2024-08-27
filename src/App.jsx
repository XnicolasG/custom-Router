
import { HomePage } from "./Pages/Home";
import { AboutPage } from "./Pages/About";
import { Router } from "./Router";
import { Page404 } from "./Pages/404";
import { Route } from "./Route";

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
    component: ({routeParams}) => <h1>Buscador {routeParams.query}</h1>
  }
]


function App() {
  return (
   <main>
    <Router routes={routes} defaultComponent={Page404} >
      <Route path={'/'} component={HomePage} />
      <Route path={'/about'} component={AboutPage} />
    </Router>
   </main>
  )
}

export default App

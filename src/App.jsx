

import { lazy, Suspense } from "react";
import { Page404 } from "./Pages/404";
import { Router } from "./components/Router.jsx";
import { Route } from "./components/Route.jsx";

const LazyHomePage = lazy(() => import('./Pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./Pages/About.jsx'))

const routes = [
  {
    path: '/:lang/about',
    component: LazyAboutPage
  },
  {
    path: '/search/:query',
    component: ({ routeParams }) => <h1>Buscador {routeParams.query}</h1>
  }
]


function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={routes} defaultComponent={Page404} >
          <Route path='/' component={LazyHomePage} />
          <Route path='/about' component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App

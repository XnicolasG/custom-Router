# nicdev-router
es una biblioteca de enrutamiento ligera para aplicaciones React, inspirada en React Router. Ofrece una manera sencilla y eficiente de manejar rutas en tu aplicación, incluyendo soporte para rutas dinámicas y carga diferida (lazy loading) de componentes.

- ## Instalación
Puedes instalar la biblioteca utilizando npm:

npm i nicdev-router
Uso Básico
A continuación, se muestra un ejemplo básico de cómo usar MyRouter en tu aplicación React.

- ## Configuración del enrutador
Primero, necesitas importar los componentes necesarios de nicdev-router:


```
import { Router, Route, Link } from 'myrouter';
import { lazy, Suspense } from 'react';

const LazyHomePage = lazy(() => import('./pages/HomePage'));
const LazyAboutPage = lazy(() => import('./pages/AboutPage'));

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Route path="/" component={LazyHomePage} />
          <Route path="/about" component={LazyAboutPage} />
          <Route path="/search/:query" component={({ routeParams }) => (
            <h1>Search results for: {routeParams.query}</h1>
          )} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
```
- ##  Navegación entre rutas
Puedes utilizar el componente Link para crear enlaces de navegación dentro de tu aplicación:

jsx
```
import { Link } from 'myrouter';

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/about">Go to About Page</Link>
      <Link to="/search/react">Search for "react"</Link>
    </>
  );
}

export default HomePage;
```
- ## Manejo de rutas dinámicas
MyRouter también soporta rutas dinámicas. Por ejemplo, puedes definir una ruta para manejar búsquedas en tu aplicación:

jsx
```
import { Router, Route } from 'myrouter';

function App() {
  return (
    <Router>
      <Route path="/search/:query" component={({ routeParams }) => (
        <h1>Search results for: {routeParams.query}</h1>
      )} />
    </Router>
  );
}

export default App;
```
- ## API 

<Router />
El componente Router se encarga de manejar la lógica de enrutamiento en tu aplicación. Acepta las siguientes propiedades:

routes: Un array de objetos de ruta que define los caminos y los componentes a renderizar.
defaultComponent: Un componente que se renderiza cuando ninguna ruta coincide (por defecto muestra un mensaje de "404 Not Found").
<Route />
El componente Route define una ruta en tu aplicación. Acepta las siguientes propiedades:

path: La ruta para la cual este componente debe renderizarse.
component: El componente que se renderiza cuando la ruta coincide.
<Link />
El componente Link crea un enlace de navegación:

to: La ruta a la que el enlace debe navegar.
target: (Opcional) Especifica dónde abrir el documento vinculado.
Contribuir
Si encuentras algún problema o tienes alguna sugerencia, siéntete libre de abrir un issue o enviar un pull request en el repositorio de GitHub.

Licencia
Este proyecto está licenciado bajo la Licencia MIT.

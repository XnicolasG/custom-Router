import { useEffect, useState } from "react";
import { EVENTS } from "./const";
import { match } from "path-to-regexp";

export const Router = ({routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
    useEffect(()=>{
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
      }
      window.addEventListener(EVENTS.PushState, onLocationChange)
      window.addEventListener(EVENTS.PopState, onLocationChange)
      //limpiar evento
      return() => {
        window.removeEventListener(EVENTS.PushState, onLocationChange)
        window.removeEventListener(EVENTS.PopState, onLocationChange)
      }
    },[])

    let routeParams = {}
  
    const Page = routes.find(({path}) => {
       if (path === currentPath) return true 
       //path-to-regex para detectar rutas dinamicas
       //search/:query <- :query seria la ruta dinamica
      const matcherUrl = match(path, {decode: decodeURIComponent})
      const matched = matcherUrl(currentPath)
      if (!matched) return false

      
      routeParams = matched.params
      return true
    })?.component
    return Page 
    ? <Page routeParams={routeParams} /> 
    : <DefaultComponent routeParams={routeParams} />
  }
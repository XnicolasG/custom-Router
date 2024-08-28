import { Children, useEffect, useState } from "react";
import { EVENTS } from "../const";
import { match } from "path-to-regexp";
import { getCurrentPath } from "../utils/getCurrentPath";

export const Router = ({children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) => {
  console.log(children);
  
    const [currentPath, setCurrentPath] = useState(getCurrentPath());
  
    useEffect(()=>{
      const onLocationChange = () => {
        setCurrentPath(getCurrentPath())
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

    const routesFromChildren = Children.map(children, ({props,type}) => {
      const {name} = type
      const isRoute = name === 'Route'

      return isRoute ? props : null
    })
  console.log('routesFromChildren:', routesFromChildren);
  const RoutesToUse = routes.concat(routesFromChildren).filter(Boolean)
  
    const Page = RoutesToUse.find(({path}) => {
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
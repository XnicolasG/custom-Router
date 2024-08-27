import React, { useEffect } from 'react'

export const Search = ({routeParams}) => {
    useEffect(() => {
        document.title = `Has buscado ${routeParams.query}` 
    },[])
  return (
    <div>Buscaste {routeParams.query}</div>
  )
}

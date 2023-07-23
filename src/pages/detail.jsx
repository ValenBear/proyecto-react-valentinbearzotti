import React from 'react'
import { useParams } from 'react-router-dom'



const Detail = (producto) => {
  const {id, marca, descripcion, descripcion2, imagen} = useParams ();
  
  return (
    <div className="div-producto-detalle">
      <div><img src={producto.imagen} alt="foto del producto"/></div>
    </div>
  )
}

export default Detail
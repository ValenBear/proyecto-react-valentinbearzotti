import React from 'react';
import ItemCount from './itemCount';
const onAdd = (cant) => {
  console.log(`agregaste ${cant}`)
  }

const ItemDetail = ({producto}) => {
  return (
    <div className='div-detailitem'>
      <img src={producto.imagen} alt={producto.nombre}/>
      <div className='div-details'>
        <h4>{producto.nombre}</h4>
        <div className='div-prd-precio'>
          <p className='prd-precio'>${producto.precio}</p>
          <p className='prd-precio-cuotas'>Mismo precio en 12 cuotas de ${Math.trunc(producto.precio/12)}</p>
        </div>
        <ItemCount
        stock={producto.stock}
        onAdd={onAdd}
        initial={1}
        />
      </div>

    </div>
  )
}

export default ItemDetail
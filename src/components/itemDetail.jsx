import React, { useState, useContext } from 'react';
import ItemCount from './itemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


const ItemDetail = ({producto}) => {
  const [cantAdd, setCantAdd] = useState('')
  const {addItem} = useContext(CartContext)

  const onAdd = (cant) => {
    setCantAdd(cant)
    addItem(producto, cant)
  }

  return (
    <div className='div-detailitem'>
      <img src={producto.imagen} alt={producto.nombre}/>
      <div className='div-details'>
        <h4>{producto.nombre}</h4>
        <div className='div-prd-precio'>
          <p className='prd-precio'>${producto.precio}</p>
          <p className='prd-precio-cuotas'>Mismo precio en 12 cuotas de ${Math.trunc(producto.precio/12)}</p>
        </div>
        { cantAdd === "" ? <ItemCount stock={producto.stock} onAdd={onAdd} initial={1}/>
        : <div className='prd-btn'>
          <Link to='/cart' className="btn btn-success prd-ircarrito">Ir al Carrito</Link> 
          <Link to='/' className="btn btn-success prd-ircarrito">Seguir comprando</Link> 
          </div>
        }
      </div>
    </div>
  )
}

export default ItemDetail
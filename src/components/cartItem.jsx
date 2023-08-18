import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({item}) => {
    const {deleteItem} = useContext(CartContext)

  return (
    <div className='div-cartitem'>
        <img className='cartitem-img' src={item.imagen} alt={item.nombre}/>
        <p>{item.nombre}</p>
        <p>${item.precio}</p>
        <p>{item.cantidad}</p>
        <p>Sub total: ${item.cantidad * item.precio}</p>
        <button className='btn btn-success' onClick={()=>deleteItem(item.id)}>X</button>

    </div>
  )
}

export default CartItem
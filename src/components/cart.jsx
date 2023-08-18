import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartList from './cartList'

const Cart = () => {
const {cart}= useContext(CartContext)
  return (
    <div>
        {cart.length ? <CartList/>
        :   <div className='div-cartvacio'>
                <p>El carrito esta vacio</p>
                <Link to="/" className='btn btn-success'>Compre aqui</Link>
            </div>
        }
    </div>
  )
}

export default Cart
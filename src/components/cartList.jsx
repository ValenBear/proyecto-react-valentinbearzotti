import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './cartItem'

const CartList = () => {
    const {cart, clear, cartTotal}= useContext(CartContext)
    return (
        <div className='div-cartlist'>
            {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
            <p className='ttl-pgr'>Total a pagar: ${cartTotal()}</p>    
            <div className='div-cart-btn'>
                <button className='btn btn-success' onClick={clear}>Vaciar carrito</button>
                <Link className='btn btn-success' to='/checkout'>Terminar compra</Link>
            </div>
        </div>
    )
}

export default CartList
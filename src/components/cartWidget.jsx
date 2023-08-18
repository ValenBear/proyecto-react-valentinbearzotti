import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Badge } from "react-bootstrap";

const CartWidget = () => {
  const {cartCant} = useContext(CartContext)
  return (
    <>
        <div className='div-cart'>
        <img src="../img/carrito.png" alt="carrito de compras" />
        {cartCant() > 0 && <Badge className='contador'>{cartCant()}</Badge>}
        </div>
    </>
  )
}

export default CartWidget
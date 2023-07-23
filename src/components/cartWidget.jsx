import '../sass/style.css';


const CartWidget = () => {
  const contador = 0;


  return (
    <>
        <div className='div-cart'>
        <img src="../imagenes/carrito.png" alt="carrito de compras" />
        <span className='contador'>{contador}</span>
        </div>
    </>
  )
}

export default CartWidget
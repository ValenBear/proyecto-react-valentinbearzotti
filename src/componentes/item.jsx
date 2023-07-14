


function Item (producto) {
    return(
      <div className="div-producto">
        <img src={producto.imagen} alt="foto del producto"/>
        <h4>{producto.title}</h4>
        <p className='prd-precio'>${producto.precio}</p>
      </div>
    )
  } 
  
  export default Item;
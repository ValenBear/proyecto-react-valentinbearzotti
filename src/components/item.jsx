import {Link} from 'react-router-dom';


function Item (item) {

    return(
      <div className="div-producto">
        <img src={item.imagen} alt="foto del producto"/>
        <h4>{item.nombre}</h4>
        <p className='prd-precio'>${item.precio}</p>
        <div className='div-producto-btn'>
        <Link to={`/detail/${item.id}`} className="btn-producto btn btn-success">
        <span>Ver mas detalles</span>
        </Link>
        </div>
      </div>
      
    )
  } 
  
  export default Item;
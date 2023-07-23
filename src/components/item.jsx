import {Link} from 'react-router-dom';
import ItemCount from './itemCount';


function Item (producto) {
    const onAdd = (cant) => {
      console.log(`agregaste ${cant}`)
    }
    return(
      <div className="div-producto">
        <img src={producto.imagen} alt="foto del producto"/>
        <h4>{producto.title}</h4>
        <p className='prd-precio'>${producto.precio}</p>
        <div className='div-producto-btn'>
        <ItemCount
        stock={producto.stock}
        onAdd={onAdd}
        initial={1}
        />
        {/* <Link to={`/producto/${producto.id}/${producto.marca}/${producto.descripcion}/${producto.descripcion2}`} className="btn-producto btn btn-success">
            <span>Ver mas detalles</span>
        </Link>*/}
        </div>
      </div>
      
    )
  } 
  
  export default Item;
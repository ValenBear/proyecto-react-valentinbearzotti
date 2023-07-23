import productos from '../mock/data';
import Item from './item';

function renderItems (productos) {
  const listItems = productos.map((item) => {
    return (
      <Item
        key={item.id}
        id={item.id}
        title={item.nombre}
        imagen={item.imagen}
        precio={item.precio}
        marca={item.marca}
        descripcion={item.descripcion}
        descripcion2={item.descripcion2}
        stock={item.stock}
      />
    )
  });
  return listItems;
}

const ItemListContainer = () => {
  return (
    <div>
      <div className='div-container'>{renderItems(productos)}</div>
    </div>
  )
}

export default ItemListContainer
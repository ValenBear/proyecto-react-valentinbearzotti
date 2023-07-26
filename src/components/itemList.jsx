import React from 'react'
import Item from './item';

const ItemList = ({productos}) => {
  return (
    <div className='div-container'>
        {productos.map((item)=> <Item key={item.id} {...item}/>)}
    </div>
  )
}

export default ItemList 
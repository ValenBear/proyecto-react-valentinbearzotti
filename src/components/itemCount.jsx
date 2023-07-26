import React, {useState} from 'react'

const ItemCount = ({stock, onAdd, initial}) => {
    const [count, setCount] = useState(initial)
    const sumar = () =>{
        if (count < stock){
            setCount(count + 1)
        }
    }
    const restar = () =>{
        if (count > 0){
            setCount(count - 1)
        }
    }
    return (
        <div className='div-itemCount d-flex flex-column aling-items-center flex-wrap'>
            <div className='div-resum'>
                <button className='btn btn-success' onClick={restar}>-</button>
                <span>{`${count} / ${stock}`}</span>
                <button className='btn btn-success' onClick={sumar}>+</button>
            </div>
            <div className='div-btn-onAdd'>
            <button className='mt-2 btn btn-success' disabled={count === 0} onClick={()=>onAdd(count)}>Agregar al carrito</button>
            </div>

        </div>
    )
}


export default ItemCount
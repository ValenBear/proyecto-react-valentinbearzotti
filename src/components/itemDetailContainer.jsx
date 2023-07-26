import React, { useEffect, useState } from 'react'
import { getItem } from '../mock/data'
import ItemDetail from './itemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
      setLoading(true)
      getItem(id)
      .then((res)=> setProducto(res))
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[])

  return (
    <div>
    { 
     loading ? <p className='cargando'>Cargando...</p>
     :
    <div className='div-detailcontainer'>
      <ItemDetail
        producto={producto}
      />
    </div>
    }
  </div>
  )
}

export default ItemDetailContainer
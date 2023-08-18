import React, { useEffect, useState } from 'react'
import { getItem } from '../mock/data'
import ItemDetail from './itemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    const [loading, setLoading] = useState(false)

/*     useEffect(()=>{
      setLoading(true)
      getItem(id)
      .then((res)=> setProducto(res))
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[]) */

    useEffect(()=>{
      setLoading(true)
      const collectionProd = collection(db, "productos")
      const referenciaAlDoc = doc(collectionProd, id)
      getDoc(referenciaAlDoc)
      .then((res)=> setProducto({id:res.id, ...res.data()}))
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
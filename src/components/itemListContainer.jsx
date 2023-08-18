import { useEffect, useState } from 'react';
import { getProducts } from '../mock/data'; 
import ItemList from './itemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../service/firebase';




const ItemListContainer = ({greeting}) => {
  
  const [productos, setProductos]= useState([])

  const {categoryId, categoryId2, marcaId}= useParams()

  const [loading, setLoading] = useState(false)

/*   useEffect(()=>{
    setLoading(true)
    getProducts()
    .then((res)=> {
      if (categoryId){
      setProductos(res.filter((item)=> item.descripcion === categoryId));
    } else if (categoryId2) {
      setProductos(res.filter((item)=> item.descripcion2 === categoryId2));
    } else if (marcaId) {
      setProductos(res.filter((item)=> item.marca === marcaId));
    } else {
      setProductos(res);
    }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[categoryId, categoryId2, marcaId]) */
  
  useEffect(()=>{
    setLoading(true)
    const coleccionProductos = categoryId ? query(collection(db, "productos"), where("descripcion", "==", categoryId)) : categoryId2 ? query(collection(db, "productos"), where("descripcion2", "==", categoryId2)) : marcaId ? query(collection(db, "productos"), where("marca", "==", marcaId)) : collection(db, "productos")
    getDocs(coleccionProductos)
    .then((res)=> {
      const list = res.docs.map((producto)=>{
        return{
          id:producto.id,
          ...producto.data()
        }
      })
      setProductos(list)
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[categoryId, categoryId2, marcaId])

  return (
    <div>
     { 
      loading ? <p className='cargando'>Cargando...</p>
      :
      <div className='div-itemlistcontainer'>
        
        <h2 className='filter-tit'>{greeting}{<span className='filter-cat'>{categoryId && categoryId || categoryId2 && categoryId2 || marcaId && marcaId}</span>}</h2>

        <ItemList
        productos={productos}
        />
        </div>
      }
    </div>
  )
}

export default ItemListContainer
import './sass/style.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom' ;
import Detail from './pages/detail';
import NavBar from './components/navBar';
import Cart from './components/cart';
import ItemListContainer from './components/itemListContainer';
import { CartProvider } from './context/CartContext';
import React, { useEffect } from "react"
import { addDoc, collection } from 'firebase/firestore';
import { db } from './service/firebase';
import { listProductos } from "./mock/data"
import CheckOut from './components/checkOut';

function App() {

/* useEffect(()=>{
  const colectionProductos = collection(db, "productos")
  listProductos.map((item)=> addDoc(colectionProductos, item))
},[]) */

  return (
    <CartProvider>
    <BrowserRouter>
      <header>
        <NavBar/>
      </header>
      <main>
      <Routes>
        <Route
          exact
          path='/'
          element={<ItemListContainer
          greeting="Bienvenido a BearDrops"/>}
        />
        <Route
          path='/category/:categoryId'
          element={<ItemListContainer
          greeting="Filtrado por: "/>}
        />
        <Route
          path='/category2/:categoryId2'
          element={<ItemListContainer
            greeting="Filtrado por: "/>}
        />
        <Route
          path='/marca/:marcaId'
          element={<ItemListContainer
            greeting="Filtrado por: "/>}
        />
        <Route
          path='/detail/:id'
          element={<Detail/>}
        />
        <Route
          path='/cart'
          element={<Cart/>}
        />
        <Route
          path='/checkout'
          element={<CheckOut/>}
        />
      </Routes>
      </main>
      <footer>
          <div>
              <p>©2023 por BearDrops todos los derechos reservados. </p>
              <p>Pagina creada con VSC.</p>
              <p>Contacto: 1126408197. Buscanos en nuestras redes sociales.</p> 
          </div>
        </footer>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App

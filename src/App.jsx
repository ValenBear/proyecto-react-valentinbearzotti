import './sass/style.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom' ;
import Detail from './pages/detail';
import NavBar from './components/navBar';
import Nosotros from './pages/nosotros';
import ItemListContainer from './components/itemListContainer';

function App() {

  return (

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
          path='/nosotros'
          element={<Nosotros/>}
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
  )
}

export default App

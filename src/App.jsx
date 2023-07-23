import './sass/style.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom' ;
import Home from './pages/Home/home';
import Detail from './pages/detail';
import NavBar from './components/navBar';
import Nosotros from './pages/Nosotros/nosotros';

const marcas = ["Nike", "Adidas", "Champion", "Polo Ralph Lauren", "The North Face", "Otros"];

function App() {

  return (

    <BrowserRouter>
      <header>
        <NavBar
          items={marcas}
        />
      </header>
      <main>
      <Routes>
        <Route
          exact
          path='/'
          element={<Home/>}
        />
        <Route
          path='/producto/:id/:marca/:descripcion/:descripcion2'
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

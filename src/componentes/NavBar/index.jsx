import CartWidget from '../CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div className="div-navp">
          <img src="../imagenes/logo-garra.jpg" className='logo' alt="logo garra" />
          <h4>BearDrops</h4>
        <CartWidget/>
      </div>
      <div className='div-navs'>
        <div className="dropdown div-button">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Parte superior</a></li>
            <li><a className="dropdown-item" href="#">Parte inferior</a></li>
            <li><a className="dropdown-item" href="#">Calzado</a></li>
          </ul>
          <button className="btn btn-secondary " type="button" >
            Sucursales
          </button>
          <button className="btn btn-secondary " type="button" >
            Contacto
          </button>
          <button className="btn btn-secondary " type="button" >
            Marcas
          </button>
        </div>
      </div>

    </nav>
  )
}

export default NavBar
import CartWidget from './cartWidget';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';



const NavBar = (props) => {
  

  return (
    <nav>
      <div className="div-navp">
          <img src="../img/logo-garra.jpg" className='logo' alt="logo garra" />
          <Link to='/' className="tit">
            BearDrops
          </Link>
          <NavLink style={{textDecoration: 'none'}} to='/cart'>
            <CartWidget/>
          </NavLink>
      </div>
      <div className='div-navs'>
        <div className="dropdown div-button">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </button>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item desc-all" to='/'>Todos Los Productos</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item desc-1" to='/category/parte%20superior'>Parte superior</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item desc-2" to='/category2/remera'>Remera</NavLink></li>
            <li><NavLink className="dropdown-item desc-2" to='/category2/campera'>Campera</NavLink></li>
            <li><NavLink className="dropdown-item desc-2" to='/category2/buzo'>Buzo</NavLink></li>
            <li><NavLink className="dropdown-item desc-2" to='/category2/chaleco'>Chaleco</NavLink></li>
            <li><NavLink className="dropdown-item desc-1" to='/category/parte%20inferior'>Parte inferior</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item desc-2" to='/category2/pantalon'>Pantalon</NavLink></li>
            <li><NavLink className="dropdown-item desc-2" to='/category2/bermuda'>Bermuda</NavLink></li>
            <li><NavLink className="dropdown-item desc-1" to='/category/calzado'>Calzado</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item desc-2" to='/category2/zapatilla'>Zapatilla</NavLink></li>
            <li><NavLink className="dropdown-item desc-2" to='/category2/otros'>Otros</NavLink></li>
          </ul>
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
          </button>
          <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to='/marca/Nike'>Nike</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to='/marca/Adidas'>Adidas</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to='/marca/Champion'>Champion</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to='/marca/Polo%20Ralph%20Lauren'>Polo Ralph Lauren</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to='/marca/The%20North%20Face'>The North Face</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to='/marca/Tommy%20Hilfiger'>Tommy Hilfiger</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to='/marca/Otros'>Otros</NavLink>
                </li>
          </ul>
          <div className='div-link'>
            <button className='btn-link'>
          <Link to='/sucursales' className="btn btn-secondary" type="button" >
            Sucursales
          </Link>
          </button>
          <button className='btn-link'>
          <Link to='/contacto' className="btn btn-secondary" type="button" >
            Nosotros
          </Link>
          </button>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default NavBar
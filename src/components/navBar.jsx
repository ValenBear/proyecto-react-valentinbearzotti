import CartWidget from './cartWidget';
import {Link} from 'react-router-dom';



const NavBar = (props) => {
  

  return (
    <nav>
      <div className="div-navp">
          <img src="../imagenes/logo-garra.jpg" className='logo' alt="logo garra" />
          <Link to='/' className="tit">
            BearDrops
          </Link>
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
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
          </button>
          <ul className="dropdown-menu">
            {props.items.map((item, index) =>{
              return (
                <li 
                  key={index}
                >
                  <a className="dropdown-item" href="#">{item}</a>
                </li>
              )
            })}
          </ul>
          <div className='div-link'>
          <Link to='/sucursales' className="btn btn-secondary" type="button" >
            Sucursales
          </Link>
          <Link to='/contacto' className="btn btn-secondary" type="button" >
            Nosotros
          </Link>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default NavBar
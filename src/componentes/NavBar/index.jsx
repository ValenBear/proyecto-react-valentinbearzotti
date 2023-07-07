import CartWidget from '../CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div className="div-logo">
        <h4>BearDrops</h4>
        <img src="../imagenes/logo-garra.jpg" alt="logo garra" />
      </div>
      
      <CartWidget/>
    </nav>
  )
}

export default NavBar
import NavBar from '../NavBar';
import ItemListContainer from '../ItemListContainer';

const Layout = () => {
  return (
    <div>
        <header>
            <NavBar/>
        </header>

        <main>
            <ItemListContainer 
            title={"Bienvenido a BearDrops"}/>
        </main>

        <footer>

        </footer>
    </div>
  )
}

export default Layout
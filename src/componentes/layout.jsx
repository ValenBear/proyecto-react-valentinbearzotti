import NavBar from './navBar';
import ItemListContainer from './itemListContainer';


const Layout = () => {
  return (
    <div>
        <header>
            <NavBar/>
        </header>

        <main>
            <ItemListContainer/>
        </main>

        <footer>

        </footer>
    </div>
  )
}

export default Layout
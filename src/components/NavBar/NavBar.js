import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
      <nav>
        <Link to='/'>
          <h3>Chocolacias</h3>
        </Link>
        <div className='Categories'>
          <NavLink to='/category/chocolate' className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>
            Chocolate Oreo
          </NavLink>
          <NavLink to='/category/chocolate2' className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>
            Chocolate Almendras
          </NavLink>
          <NavLink to='/category/chocolate3' className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>
            Chocolate Maní
          </NavLink>
        </div>
        <CartWidget />
      </nav>
    );
  };

export default NavBar
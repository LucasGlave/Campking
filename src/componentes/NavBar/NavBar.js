import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { Button } from 'react-bootstrap';

export const NavBar = () => {
  const { logout } = useContext(LoginContext)
  return (
    <div className='navbar'>
      <nav bg="light" expand="lg">
        <div className='Nav'>
          <Link to="/"><img src="./img/logo.png" width="80" height="80" alt='logo'></img></Link>
          <Link to="/" className="navbar__link rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-600 hover:text-slate-900 basic-nav-dropdown"><h6>Productos</h6></Link>
          <Link to="/nosotros" className="navbar__link rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-600 hover:text-slate-900"><h6>Nosotros</h6></Link>
          <Link to="/contacto" className="navbar__link rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-600 hover:text-slate-900"><h6>Contacto</h6></Link>
          <div className='categorias'>
            <Link to="/productos/bolsas de dormir" NavDropdown className="navbar__link rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-600 hover:text-slate-900"><h6>Bolsas de dormir</h6></Link>
            <Link to="/productos/carpas" className="navbar__link rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-600 hover:text-slate-900"><h6>Carpas</h6></Link>
            <Link to="/productos/toallas" className="navbar__link rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-600 hover:text-slate-900"><h6>Toallas</h6></Link>
            <Link to="/productos/botellas y termos" className="navbar__link rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-600 hover:text-slate-900"><h6>Botellas y termos</h6></Link>
          </div>
          <h5><CartWidget/></h5>
          <div>
            <Button className='btn btn-success' onClick={logout}>Cerrar Sesión</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className='nav'>
      <Link to="/"><img src="./img/logo.png" width="80" height="80"></img></Link>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto">
            <Link to="/"><h6>Productos</h6></Link>
            <Link to="/nosotros"><h6>Nosotros</h6></Link>
            <Link to="/contacto"><h6>Contacto</h6></Link>
            <Link to="#"> < CartWidget /> </Link>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}


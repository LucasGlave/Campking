import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <div className='footer'>
            <div className='data'>
                <h6>Carlos Pellegrini 810</h6>
                <h6>+54 291 2265314</h6>
                <h6>campking@consultas.com</h6>
            </div>
            <Link to="/"><img src="./img/logo.png" width="80" height="80" alt='logo'></img></Link>
            <div className='category'>
                <Link to="/" className="navbar__link rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-600 hover:text-slate-900"><h6>Nuestros productos</h6></Link>
                <Link to="/nosotros" className="navbar__link rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-600 hover:text-slate-900"><h6>Más de nosotros</h6></Link>
                <Link to="/contacto" className="navbar__link rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-600 hover:text-slate-900"><h6>Contáctanos</h6></Link>
            </div>
        </div>
    )
}

export default Footer
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './CartWidget.scss'

const CartWidget = () => {

    const { totalCantidad } = useContext(CartContext)

    return (
        <Link to='/cart'>
            <div className='cartwNav navbar__link rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-600 hover:text-slate-900'>
                <h5><FaShoppingCart/></h5>
                <h5>{parseInt(totalCantidad())}</h5>
            </div>
        </Link>    
    ); 
}
  
export default CartWidget;
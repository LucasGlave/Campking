import { useContext } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { Card } from "react-bootstrap"
import { FaShoppingCart } from 'react-icons/fa'
import './Cart.scss'



const Cart = () => {

    const { cart, totalPrecio, vaciarCarrito, remove } = useContext(CartContext)

    const navigate = useNavigate() 

    const handleProd = () => {
        navigate(-2)
    }

    return (
        <div className="contCart">
            <div className="divh2">
                <h2>Carrito</h2>
            </div>
            <div className="carrito">
                <div className="cartaCarrito">
                    {   
                        cart.map((prod) => (
                            <div key={prod.id} className='CardGroup'>
                                <div className="foto">
                                    <img src={prod.img} alt={prod.name}/>
                                </div>
                                <div className="texto">
                                    <h4>{prod.name}</h4>
                                    <small>Precio: ${prod.price}</small>
                                    <small>Cantidad: {prod.cantidad}</small>
                                    <button
                                        onClick={() => remove(prod.id)} className="btn btn-dark transition duration-300 ease-in-out">Eliminar del carrito
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>   
                  
            </div>
            <div className="divTotal">
            
                <Card className="cardTotal">
                    <div className="left"> 
                        <img src="./img/logofondo.jpg" width="80" height="80" alt='logo'></img>
                    </div>
                    <div className="right">
                        <FaShoppingCart/>
                        <h3>Precio total: ${totalPrecio().toFixed(3)}</h3>
                        <Button onClick={vaciarCarrito} className="btn btn-dark">Vaciar carrito</Button>
                        <Link className="btn btn-dark" to="/checkout">Comprar</Link>
                        <Button onClick={handleProd} className="btn btn-dark">Volver</Button>
                    </div>
                </Card> 
            </div> 
        </div>
    )

}

export default Cart
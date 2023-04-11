import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.scss';
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({item}) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate() 

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    return(
        <div className="detail">
            <div className="card">
                <img src={item.img} alt={item.name}/>
                <h4>{item.name}</h4>
                <h6>{item.category}</h6>
                <p>{item.description}</p>
                <div className='large'>
                    <h5>Precio: <strong>${item.price}</strong></h5>
                    {
                        isInCart(item.id)
                            ? <Link to="/cart" className="btn btn-dark">Comprar</Link>
                            : <ItemCount
                                max={item.stock}
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                handleAgregar={handleAgregar}
                            />
                    }
                    <Button onClick={handleVolver} className='btn btn-success'>Volver</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail


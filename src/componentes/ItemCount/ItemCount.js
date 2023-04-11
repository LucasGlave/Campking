import { Button } from "react-bootstrap"
import './ItemCount.scss'



const ItemCount = ({max, cantidad, setCantidad, handleAgregar}) => {

    

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad -1)
    }

    return (
        <div className="agregar">
            <div className="count">
                <Button onClick={handleRestar} className="btn btn-dark">-</Button>
                <span>{cantidad}</span>
                <Button onClick={handleSumar} className="btn btn-dark">+</Button>
            </div>
            <br/>
            <Button onClick={handleAgregar} className="btn btn-dark">Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount
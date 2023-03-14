import { Link } from "react-router-dom"
import './ItemDetail.scss';
import {MOCK_DATA} from '../../data/MOCK_DATA.json'


// const productos = MOCK_DATA.map()

const ItemDetail = ({item}) => {

    return(
        <div className="detail">
            <div className="card">
                <img src={item.img} alt={item.name}/>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <div className='large'>
                    <h5>Precio: <strong>${item.price}</strong></h5>
                    <Link to={`/`} className='btn btn-success'>Volver</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail


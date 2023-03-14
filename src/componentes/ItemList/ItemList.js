import { Link } from "react-router-dom"
import {MOCK_DATA} from '../../data/MOCK_DATA.json'

const ItemList = () => {

    return (
        <div className="ProdContainer">
            <h2>Productos</h2>
            <hr/>
            <div className='row my-5'>
                { MOCK_DATA.map((el) => (
                <div key={el.id} className='col-3 m-4'>
                    <img src={el.img} alt={el.name}/>
                    <h4>{el.name}</h4>
                    <p>{el.description}</p>
                    <div className='large'>
                        <h5>Precio: <strong>${el.price}</strong></h5>
                        <Link to={`/detail/${el.id}`} className='btn btn-light'>Ver más</Link>
                    </div>
                </div>)
                )}
            </div>
        </div>
    )
}

export default ItemList
import { Link } from "react-router-dom"


const Item = ( {item} ) => {

    return (
        
            <div className='card'>
                <img src={item.img} alt={item.name}/>
                <h4>{item.name}</h4>
                <h6>{item.category}</h6>
                <p>{item.description}</p>
                <div className='large'>
                    <h5>Precio: <strong>${item.price}</strong></h5>
                    <Link to={`/detail/${item.id}`} className='btn btn-success'>Ver más</Link>
                </div>
            </div>
        
    )
}

    

export default Item
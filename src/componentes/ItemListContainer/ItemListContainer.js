import './ItemListContainer.scss';
import { PedirDatos } from '../../helpers/PedirDatos'
import MOCK_DATA from '../../data/MOCK_DATA.json'
// import { useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"


const ItemListContainer = () => {
  <PedirDatos/>
  // const [productos, setProductos] = useState([])
  // const [loading, setLoading] = useState(true)

  // const { categoryId } = useParams()
  
  // useEffect(() => {
  //     setLoading(true)
      
  //     pedirDatos()
  //         .then((response) => {
  //             if (!categoryId) {
  //                 setProductos(response)
  //             } else {
  //                 setProductos( response.filter((prod) => prod.category === categoryId) )
  //             }
  //         })
  //         .catch((error) => {
  //             console.log(error)
  //         })
  //         .finally(() => {
  //             setLoading(false)
  //         })
  // }, [categoryId])

  // useEffect(() => {
  //   pedirDatos()
  //   .then((response)=> {
  //     console.log(response)
  //   })
  //   .catch((error)=> {
  //     console.log(error)
  //   })
  //   .finally(()=> {
  //     console.log("Fin del proceso")
  //   })
  // }, [])

  return (
    
    <div className="ProdContainer">
      
      <h2>Productos</h2>
      <hr/>
      
        <div className='row my-5'>
          { MOCK_DATA.map((el) => (
            
            <div key={el.id} className='col-3 m-4'>
              <div className='card'>
                <img src={el.img} alt={el.name}/>
                <h4>{el.name}</h4>
                <p>{el.description}</p>
                <div className='large'>
                  <h5>Precio: <strong>${el.price}</strong></h5>
                  <Link to={`/detail/${el.id}`} className='btn btn-success'>Ver más</Link>
                </div>
                </div>
            </div>)
            
          )}
        </div>
    </div>
  )
}

export default ItemListContainer
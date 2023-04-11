import './ItemListContainer.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config'
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()
  
  useEffect(() => {
      setLoading(true)

      const productosRef = collection(db, "productos")
      const q = categoryId
        ? query(productosRef, where("category", "==", categoryId))
        : productosRef

      getDocs(q)
          .then((res) => {
            const docs = res.docs.map((doc) =>{
              return {...doc.data(), id: doc.id}
            })
            setProductos(docs)
          })
          .finally(()=>{
            setLoading(false)
          })

  }, [categoryId])

  return (
    
    <div className="ProdContainer">
      {
        loading
          ? <div className='cargando'> <Spinner animation="border"/> </div>
          // <div className='divh2' ><h2>Cargando</h2></div>
          : <div className='col2'><ItemList items={productos}/></div>
      }
    </div>
  )
}

      
export default ItemListContainer
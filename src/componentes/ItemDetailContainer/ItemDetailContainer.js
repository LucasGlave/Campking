import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from "../../firebase/config"
import { getDoc, doc } from "firebase/firestore"


const ItemDetailContainer  = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()


    useEffect(() => {
        setLoading(true)
        
        const docRef = doc(db , "productos", itemId)
        getDoc(docRef)
            .then((doc)=>{
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => setLoading(false))
    }, [itemId])

    return(
        <div>
            {
                loading
                    ? <div style={{minheight:'73.1vh'}} className="detail">
                        <div className="divh2">
                            <h2>Cargando</h2>
                        </div>
                    </div>
                    
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer
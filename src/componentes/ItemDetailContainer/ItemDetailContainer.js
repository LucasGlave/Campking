import { useEffect, useState } from "react"
import { pedirProductoPorld } from "../../helpers/PedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer  = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    console.log(item)
    useEffect(() => {
        setLoading(true)

        pedirProductoPorld(Number(itemId))
            .then((resp)=> {
                setItem(resp)
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [])

    return(
        <div>
            {
                loading
                    ? <div className="detail"><h2>Cargando</h2></div> 
                    : <ItemDetail item={item}/>



            }
        </div>
    )
}

export default ItemDetailContainer
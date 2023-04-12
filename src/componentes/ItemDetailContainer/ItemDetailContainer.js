import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from "../../firebase/config"
import { getDoc, doc } from "firebase/firestore"


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "productos", itemId)
        getDoc(docRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => setLoading(false))
    }, [itemId])

    return (
        <div>
            {
                loading
                    ?
                    <div className="cargando">
                        <div class="card border border-blue-300 rounded-md p-4 max-w-sm w-full mx-auto">
                            <div class="animate-pulse flex space-x-4">
                                <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                                <div class="flex-5 space-y-6 py-1">
                                    <div class="h-2 bg-slate-200 rounded"></div>
                                    <div class="space-y-3">
                                        <div class="grid grid-cols-3 gap-4">
                                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                                        </div>
                                        <div class="h-2 bg-slate-200 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer
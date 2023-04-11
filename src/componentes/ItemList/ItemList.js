import Item from "../Item/Item"
import './ItemList.scss';

const ItemList = ( {items} ) => {

    return (
        <div className="productosDiv">
            <div className="divh2">
                <h2>Productos</h2>
            </div>

            <div className='listContainer'>
                
                    { items.map((producto) => <Item key={producto.id} item={producto}/>) }
                
            </div>
        </div>
    )
}

export default ItemList
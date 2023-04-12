import { Form } from "react-bootstrap"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import './Checkout.scss'


const Checkout = () => {

    const { cart, totalPrecio, vaciarCarrito } = useContext(CartContext)


    const [values, setValues] = useState({
        nombre:'',
        direccion:'',
        email:''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(values.nombre.length < 3){
            alert('Nombre inválido')
            return
        }
        if(values.direccion.length < 3){ 
            alert('Direccion inválida')
            return
        }
        if(values.email.length < 5){
            alert('Email inválido')
            return
        }
        const orden = {
            cliente: values,
            items: cart.map((prod) => ({nombre: prod.name, precio: prod.price, cantidad: prod.cantidad})),
            total: totalPrecio(),
            fecha: new Date()
        }
        console.log(orden)


        const ordersRef = collection(db, 'orders')

        addDoc(ordersRef, orden)
            .then((doc) => {
                vaciarCarrito()
            })

    }

    if (cart.length === 0){
        return <Navigate to="/"/> 
    }

    return (
        <div className="checkout">
            <div className="divh2">
                <h2>Checkout</h2>
            </div>
            <section>
                <div className="form-box">  
                    <div className="form-value">
                        <Form onSubmit={handleSubmit}>
                            <h3>INGRESE SUS DATOS</h3>
                            <input
                                onChange={handleInputChange}
                                value={values.nombre}
                                type={'text'}
                                placeholder='Nombre'
                                className="form-control my-2 inputbox"
                                name="nombre"
                            />
                            <input
                                onChange={handleInputChange}
                                value={values.direccion}
                                type={'text'}
                                placeholder='Dirección'
                                className="form-control my-2 inputbox"
                                name="direccion"
                            />
                            <input
                                onChange={handleInputChange}
                                value={values.email}
                                type={'text'}
                                placeholder='Email'
                                className="form-control my-2 inputbox"
                                name="email"
                            />
                            <button className="btn btn-light" type="submit">Enviar</button>
                        </Form>
                    </div>
                </div>
            </section>
        </div>

    )

}

export default Checkout
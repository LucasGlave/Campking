import { Card } from 'react-bootstrap'
import { useContext, useState } from 'react'
import './LoginScreen.scss'
import { LoginContext } from '../../context/LoginContext'

const LoginScreen = () => {
    const { tryLogin } = useContext(LoginContext)

    const[values, setValues] = useState({
        email: '',
        contraseña: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        tryLogin(values)
    }

    return(
        <div className='login-screen'>
            
            <Card className='cardLogin'>
                
                <div className='login'>
                    <h3>INICIAR SESIÓN</h3>

                    <form onSubmit={handleSubmit}>
                        <input value={values.email} type={'text'} onChange={handleInputChange} className ='form-control' placeholder='Email' name='email'/>
                        <input value={values.contraseña} type={'password'} onChange={handleInputChange} className ='form-control' placeholder='Contraseña'name='contraseña'/>
                        <button className='btn btn-dark' type='submit'>INICIAR</button>
                    </form>
                </div>
            </Card>
            <img src="./img/logo.png" width={400} height={400} alt='logo'></img>
        </div>
)}

export default LoginScreen;
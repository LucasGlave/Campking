import { useContext } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"
import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer';
import Nosotros from '../componentes/Nosotros/Nosotros';
import Contacto from '../componentes/Contacto/Contacto';
import ItemDetailContainer from '../componentes/ItemDetailContainer/ItemDetailContainer';
import LoginScreen from '../componentes/LoginScreen/LoginScreen'
import { NavBar } from '../componentes/NavBar/NavBar';
import Cart from "../componentes/Cart/Cart";
import Checkout from "../componentes/Checkout/Checkout";
import Footer from "../componentes/Footer/Footer";

const AppRouter = () => {

    const { user } = useContext(LoginContext)


    return (
            
      <BrowserRouter>
        {
          user.logged
            ? <>
                <NavBar/>
                <Routes>
                  <Route path='/' element={<ItemListContainer/>}/>
                  <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
                  <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
                  <Route path='/nosotros' element={<Nosotros/>}/>
                  <Route path='/contacto' element={<Contacto/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/checkout' element={<Checkout/>}/>
                  <Route path='*' element={<Navigate to= "/"/>}/>
                </Routes>
                <Footer/>
              </>
          : <>
              <Routes>
                <Route path='/login' element={<LoginScreen/>}/>
                <Route path='*' element={<Navigate to= "/login"/>}/>
              </Routes> 
            </>
        }
      </BrowserRouter>
    )
}

export default AppRouter
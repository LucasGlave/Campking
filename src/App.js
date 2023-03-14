import './App.scss';
import { NavBar } from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentes/NavBar/NavBar.scss'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './componentes/Nosotros/Nosotros';
import Contacto from './componentes/Contacto/Contacto';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';


function App() {



  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>

      

    </BrowserRouter>
  );
}

export default App;

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentes/NavBar/NavBar.scss'
import {LoginProvider} from './context/LoginContext'
import AppRouter from './routes/AppRouter';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>  
    </LoginProvider>
  );
}

export default App;

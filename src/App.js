import './App.scss';
import { NavBar } from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentes/NavBar/NavBar.scss'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


function App() {



  return (
    <div>
      <NavBar/>
      <ItemListContainer/>

    </div>
  );
}

export default App;

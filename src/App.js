import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import CrearUsuario from './components/CrearUsuario';
import EditarUsuario from './components/EditarUsuario';
import MostrarUsuarios from './components/MostrarUsuarios';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<MostrarUsuarios></MostrarUsuarios>}></Route>
        <Route path='/edit/:ID' element={<EditarUsuario></EditarUsuario>}></Route>
        <Route path='/create' element={<CrearUsuario></CrearUsuario>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

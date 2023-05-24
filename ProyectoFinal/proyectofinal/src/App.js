import { NavBar} from './Componentes/NavBar';
// import { Carrusel} from './Componentes/Carrusel';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { AcercaDe } from './Pages/AcercaDe';
import { Contacto } from './Pages/Contacto';
import { Trabajos } from './Pages/Trabajos';
import { Inicio } from './Pages/Inicio';
import { Footer } from './Componentes/Footer';
import UncontrolledExample from './Componentes/Carrusel';



export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <UncontrolledExample/>

        <Routes>
          <Route path ='/Inicio' element={<Inicio/>}/>
          <Route path ='/AcercaDe' element={<AcercaDe/>} />
          <Route path ='/Contacto' element={<Contacto/>} />
          <Route path ='/Trabajos' element={<Trabajos/>} />
        </Routes>
      </Router>

      <Footer/>
    </div>
  );
}
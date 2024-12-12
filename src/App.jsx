import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Principal from './Principal'
import { BrowserRouter, Route, Routes } from 'react-router'
import Plantilla from './paginas/Plantilla';
import Historia from './paginas/Historia';
import { Header } from './Components/Header';
import Presidentes from './paginas/Presidentes';
import NavBar from './Components/NavBar';
import Palmares from './paginas/Palmares';
import JugadoresHistoricos from './paginas/JugadoresHistoricos';
import Footer from './Components/Footer';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        <Route index element={<Principal />} />
        <Route path="/inicio" element={<Principal />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/plantilla" element={<Plantilla />} />
        <Route path="/trofeos" element={<Palmares />} />
        <Route path="/historia/presidentes" element={<Presidentes />} />
        <Route path="/historia/jugadoreshistoricos" element={<JugadoresHistoricos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App

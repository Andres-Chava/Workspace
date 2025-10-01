import logo from './logo.svg';
import './App.css';
import Lista from './Lista';
import Footer from './Footer';
import Header from './Header';
import Inicio from './Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let estudiantes = [{ nombre: "Fulanito", apellido: "De Tal" },
  { nombre: "Peranito", apellido: "Perez" },
  { nombre: "Menganito", apellido: "Rivera" },
  { nombre: "Angie", apellido: "Ibañez" },
  { nombre: "Juliana", apellido: "Muñoz" },
  { nombre: "Daniela", apellido: "Duque" },
  { nombre: "Angel", apellido: "Aguirre" },
  { nombre: "Juan", apellido: "Usuga" }
  ];
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/estudiantes' element={<Lista listaestudiantes={estudiantes} />} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

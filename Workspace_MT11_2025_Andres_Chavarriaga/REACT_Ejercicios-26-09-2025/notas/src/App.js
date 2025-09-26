import logo from './logo.svg';
import './App.css';
import Lista from './Lista';
import Footer from './Footer';

function App() {
  let estudiantes = [{nombre: "Fulanito", apellido: "De Tal"},
    {nombre: "Peranito", apellido: "Perez"},
    {nombre: "Menganito", apellido: "Rivera"},
    {nombre: "Angie", apellido: "Ibañez"},
    {nombre: "Juliana", apellido: "Muñoz"},
    {nombre: "Daniela", apellido: "Duque"},
    {nombre: "Angel", apellido: "Aguirre"},
    {nombre: "Juan", apellido: "Usuga"}
  ];
  return (
    <div className="App">
      <Lista listaestudiantes={estudiantes}/>
      <Footer></Footer>
    </div>
  );
}

export default App;

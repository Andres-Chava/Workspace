import logo from './logo.svg';
import './App.css';
import Componente from './Componente.js';
import Estudiante from './Estudiante.js';

function App() {
  return (
    <div className="App">
      <Componente></Componente>
      <Estudiante nombre={'pepito'} apellido={' perez'}></Estudiante>
      <Estudiante nombre={'juanito'} apellido={' alimaña'}></Estudiante>
    </div>
  );
}

export default App;

import './Estudiante.css';

function Estudiante({ nombre, apellido }) {
    return (
        <div className='nombre'>
            <h1>{nombre} {apellido}</h1>
        </div>
    )
}

export default Estudiante;
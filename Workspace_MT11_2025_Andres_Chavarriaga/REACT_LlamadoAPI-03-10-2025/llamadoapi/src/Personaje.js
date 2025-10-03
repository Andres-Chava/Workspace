import './Personaje.css';

function Personaje({ name, status }) {
    return (
        <div className='personajeclase'>
            <h1>{name}</h1><hr></hr>
            <h2>{status}</h2><hr></hr>
        </div>
    )
}

export default Personaje;
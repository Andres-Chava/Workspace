import './ListaPersonajes.css';
import Personaje from './Personaje';
import { useEffect, useState } from 'react';

function ListaPersonajes() {
    const [personajes, setPersonajes] = useState(null);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setPersonajes(data));
    }, []);

    return (
        <div className='personajes'>
            <h1>Lista de personajes</h1>
            {personajes != null ? (
                personajes.results.map((per, index) => {
                    <Personaje name={per.name} status={per.status}></Personaje>
                })
            ) :
                (<h2>Cargando ...</h2>)
            }
        </div>
    )
};

export default ListaPersonajes;
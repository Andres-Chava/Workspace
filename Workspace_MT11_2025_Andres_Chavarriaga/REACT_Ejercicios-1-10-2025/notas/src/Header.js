import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            LOGO <hr />
            MENU
            <nav className='header'>
                <ul className='header'>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>

                    <li>
                        <Link to="/estudiantes">Estudiantes</Link>
                    </li>
                    <li>
                        <Link to="/modulos">Modulos</Link>
                    </li>
                    <li>
                        <Link to="/login">Iniciar sesión</Link>
                    </li>
                    <li>
                        <Link to="/signin">Registrarse</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
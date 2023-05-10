
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/Inicio"
            >
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/Inicio"
                    >
                        Inicio
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/AcercaDe"
                    >
                        AcercaDe
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/Trabajos"
                    >
                        Trabajos
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/Contacto"
                    >
                        Contacto
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
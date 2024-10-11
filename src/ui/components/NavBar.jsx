import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate(); // Custom Hook

    const onLogout = () => {
        navigate('/login',{ replace: true });

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark  p-4">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/marvel"
                    >
                        Marvel 
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`}
                        to="/dc"
                    >
                        DC 
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`}
                        to="/search"
                    >
                        Explorar
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`}
                        to="/hero"
                    >
                       Superhéroes
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <button 
                        onClick={onLogout}
                    >
                        Iniciar Sesión
                    </button>

                </ul>
            </div>
        </nav>
    )
}
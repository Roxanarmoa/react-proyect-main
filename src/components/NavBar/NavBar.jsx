import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

import "./NavBar.scss"


const NavBar = () =>{
    return(
        <div id="navbar">
            <Link to="/" >
                <img className="nav-brand"  src="/img/logo.png" alt="logo" />
            </Link>
            <ul>
                <li>
                    <Link to="/categorias/mountain" className="nav-link" href="">MOUNTAIN BIKE</Link>
                </li>
                <li>
                    <Link to="/categorias/ruta" className="nav-link" href="">RUTA</Link>
                </li>
                <li>
                    <Link to="/categorias/urban" className="nav-link" href="">URBANA</Link>
                </li>
                <CartWidget/>
            </ul>
            
        </div>
    )
}

export default NavBar
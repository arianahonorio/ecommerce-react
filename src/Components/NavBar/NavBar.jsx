import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import {Link} from "react-router-dom"

function NavBar () {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <h1>NutriMarket</h1>
            </Link>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/categoria/frutos-secos">Frutos secos</Link>
                    </li>
                    <li>
                        <Link to="/categoria/semillas">Semillas</Link>
                    </li>
                    <li>
                        <Link to="/categoria/legumbres">Legumbres</Link>
                    </li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar
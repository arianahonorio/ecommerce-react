import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"


function NavBar () {
    return (
        <header className="header">
            <a href="/" className="logo">NutriMarket</a>
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">Frutos Secos</a>
                <a href="/">Sin TACC</a>
                <a href="/">Especias</a>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar
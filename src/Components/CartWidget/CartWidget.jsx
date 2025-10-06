import {Link} from "react-router-dom"
import "./CartWidget.css"
import { use, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"

const CartWidget = () => {

    const imgCarrito= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS41loupzVTYrYEXzoj47Dw00090FJmYm-hdQ&s"

    const {cantidadTotal} = useContext (CarritoContext)

    return (
    <div>
        <Link to="/cart">
        <img className="imgCarrito" src={imgCarrito} alt="Imagen de un carrito de compras" />
        {
            cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
        </Link>
    </div>
    )
}

export default CartWidget
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import "./NavBar.scss"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { carrito , totalCantidad } = useContext(CartContext)
    return (
        <Link to="/carrito" id="cartwidget">
            <img src="/img/cart.png" alt="" />
            {
                carrito.length !== 0 && <p>{totalCantidad()}</p> //elimina el numero del carrito
            }
            
        </Link>
    )
}

export default CartWidget
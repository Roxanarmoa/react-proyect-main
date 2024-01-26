import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";

import "./Carrito.scss"

const Carrito = () => {
    const {carrito, borrarCarrito,borrarProducto, totalPrecio} = useContext(CartContext)

    if(carrito.length ===0){
        return(
            <div className="carrito-vacio">
                <h2>El carrito está vacío 😢</h2>
                <Link className="volver" to="/">Volver al inicio</Link>
            </div>
        )
    }

    return (
    <div >
        <ul className="article">
            {
                carrito.map((product) => (
                    <li className="article-products" key={product.id}>
                        <img className="img-product" src={product.thumbnail} alt="" />
                        <p className="product-title">{product.title}</p>
                        <p className="product-title">Cantidad: {product.cantidad}</p>
                        <p>Precio: {product.price}</p>
                        <button onClick={ () => borrarProducto(product.id) }>Eliminar producto</button>
                    </li>
            ))}
        </ul>
        <div className="total">
        <h3>Total: {totalPrecio()}</h3>
        <button onClick={borrarCarrito}>Vaciar carrito </button>
        <Link to="/Checkout">
            <h4>Continuar con mi compra</h4>
        </Link>
        </div>
        
    </div>
    
)
}

export default Carrito
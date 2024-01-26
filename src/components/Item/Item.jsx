import React from "react";

import { Link } from "react-router-dom";

import "./Item.scss"

//React.memo para hacer cambios y que no recargue todos los productos
const Item = React.memo(({product}) =>{
    return(
        <div className="products-container">
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
            <p>${product.price}</p>
            <Link to={`/detalle/${product.id}`}className="link"> Ver Detalles </Link>
        </div>
    );
},(propsAntiguas, propsNuevas) =>JSON.stringify(propsAntiguas) === JSON.stringify(propsNuevas) )

export default Item;
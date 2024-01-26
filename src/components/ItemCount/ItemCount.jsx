
import { useState } from "react";

import "./ItemCount.scss"

//contador de elementos


const ItemCount = ({stock,agregarAlCarrito}) => {

    const[count,setCount] = useState(1);

    const suma = () => {
        if ( count < stock ) {
            setCount( count + 1 )
        }
    };

    const resta = () => {
        if ( count > 1 ) {
            setCount( count - 1 )
        }
    };

    return(
        <div className="item-count">
            <div className="controls">
                <button onClick={resta}>-</button>
                <p>{count}</p>
                <button  onClick={suma}>+</button>
            </div>
            <button className="agregarAlCarrito" onClick={()=> agregarAlCarrito(count)}>Agregar al carrito</button>
        </div>//()=> funcion propia, nueva para agregar al carrito con el nuevo contador 
    )
}

export default ItemCount;
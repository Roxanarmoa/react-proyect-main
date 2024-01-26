import { createContext, useState } from "react";

const CartContext = createContext()

//componente funcional. sirve como proveedor de contexto
const CartProvider =( {children} ) =>{
    const [ carrito, setCarrito ] = useState([])

    const añadirProducto = (product) => {
        const condicion = estaEnCarrito (product.id)
        if ( condicion ){
            //suma la cantidad si el id ya esta agregado
            const productosModificados = carrito.map((productoCarrito)=>{
                if(productoCarrito.id === product.id){
                    return{...productoCarrito,cantidad: productoCarrito.cantidad + product.cantidad}
                }else{
                    return productoCarrito
                }
            })
            setCarrito(productosModificados)

        }else{
            setCarrito([...carrito,product])
        }
        
    }



    const estaEnCarrito = (idProduct) => {
        return carrito.some((product)=> product.id === idProduct)
    }

    const totalCantidad = () => {
        return carrito.reduce((total, product)=> total + product.cantidad , 0) 
    }
    const totalPrecio = () => {
        return carrito.reduce((total, product)=> total + (product.cantidad * product.price ) , 0)
    }



    const borrarCarrito = () => {
        setCarrito([])
    }

    const borrarProducto = (idProduct) => { 
        const productosFiltrados = carrito.filter((product) => product.id !== idProduct)
        setCarrito(productosFiltrados)
    }




    return(
        <CartContext.Provider 
        value={{
            carrito, 
            añadirProducto, 
            totalCantidad,
            borrarCarrito,
            borrarProducto, 
            totalPrecio
            }}
            >
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider, CartContext}

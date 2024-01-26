import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection } from "firebase/firestore"
import Form from "./Form";

import db from "../../db/db";


import "./Checkout.scss"
import { Link } from "react-router-dom"

const Checkout = () => {
    const [datosForm,setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
    })

    const[idOrden, setIdOrden] =useState(null)

    const {carrito, totalPrecio, borrarCarrito} = useContext(CartContext);//quiero usar carrito de useContext, que viene de CartContext



    //guarda datos que se escriben en el form
    const guardarDatosInput = (event) =>{
        setDatosForm( { ...datosForm, [event.target.name]: event.target.value })
    };                                 //se guarda el nombre del input / guarda el valor, lo que se escribe ej: ["nombre"]:"Roxana"
    
    //hay que hacer un event prevent default para que se guarden los datos del input 
    const enviarOrden = (event) => {
        event.preventDefault();
        const orden = {
            comprador: { ...datosForm },
            productos: [ ...carrito ],
            total: totalPrecio(),
        };
        subirOrden(orden);
    }

    const subirOrden = (orden) => {
        const ordenesRef = collection(db, "ordenes") //se crea en la base de datos
        addDoc(ordenesRef, orden)
        .then((respuesta) => {
            setIdOrden(respuesta.id)
            //limpia el carrito
            borrarCarrito()
        });
    };

    return (
        <div className="orden">
            {
                idOrden ? (
                    <div >
                        <h2>Orden generada correctamente!</h2>
                        <p>N° de orden: {idOrden}</p>
                        <Link className="inicio" to="/">Volver al inicio</Link>
                    </div>
                ):(
                    <Form 
                        datosForm={datosForm} 
                        guardarDatosInput={guardarDatosInput} 
                        enviarOrden={enviarOrden}
                    />
                )}
        </div>//se pasa por props los datos y funciones
    );
};

export default Checkout

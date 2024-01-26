import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore"; // doc porque es un solo documento/producto
import { useParams } from "react-router-dom";
import db from "../../db/db";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    const{ id } = useParams()

    useEffect(()=>{
        const productoReferido = doc( db, "products", id) //referencia al documento products en base de datos por ID 
        getDoc(productoReferido)//armar objeto para que se vea en la pag
        .then((respuesta)=> {
            const productoDb = { id: respuesta.id, ...respuesta.data()}//metodo que obtiene informacion
            setProduct(productoDb)//aca se muestra
        });
    }, [id]);
    
    return (
        <div> 
            <ItemDetail product={product}/>
        </div>
    )//muestra el producto seleccionado "ver detalles"
}
export default ItemDetailContainer
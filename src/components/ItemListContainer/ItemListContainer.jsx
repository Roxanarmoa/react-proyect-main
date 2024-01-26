import { useEffect, useState } from "react";


import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { collection, getDocs, query, where } from  "firebase/firestore"; // database-firebase  { colleccion,traer documentos,referencia a consulta, filtra la data }

import db from "../../db/db";
//import "./ItemListContainer.scss"


const ItemListContainer = () => {

    const [products, setProductos] = useState([]);
    
    const [cargando, setCargando] =  useState(true)

    const { categoria } = useParams();



    useEffect(() => {
        setCargando(true)
        
        //categorias
        let consulta
        const productosReferidos = collection(db,"products") //base de datos/database
        
        if (categoria){
            consulta = query(productosReferidos, where("categoria","==",categoria)) //sirve para hacer categorias de consultas. mayor a 15.000, menor a
        }else{
            consulta = productosReferidos
        }//filtrado de data
    
        //trae todos los documentos/productos
        getDocs(consulta)
            .then((respuesta) => {
            let productsDb = respuesta.docs.map((product) => {
                return { id: product.id, ...product.data() }
                });
                setProductos(productsDb)
            })
            .catch((error)=> console.log(error))
            .finally(()=> setCargando(false))
}, [categoria]);

return (
    <>
    {
        cargando ? (
            <div className="cargando">
                <MoonLoader color="black"/>
            </div>
        )//si está cargando = mostrar pantalla de carga(ternarios)
        :(<div>
            <ItemList products={products}/>
        </div>)//si no está cargando= mostrar directamente productos
    }
    </>
    
);
};

export default ItemListContainer
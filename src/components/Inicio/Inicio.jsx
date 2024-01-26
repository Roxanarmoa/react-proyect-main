import { Link } from "react-router-dom";

import "./Inicio.scss"

const Inicio = () => {

    return (
        <div>
            
            <div className="box-main">
            
                <img className="Backimg" src="./public/img/fondo-inicio.png" alt="fondo-contenedor" />
                <h1 className="first-title">Experiencia en el mundo de las bicicletas </h1>
                <h2 className="second-title">Con una amplia variedad para elegir</h2>

                <section className="btn">
                    <Link to="/categoria/detalles" className="btn-catalogo">Ver catálogo</Link>   
                </section>



                <section className="article-content">
                    <article>
                        <img src="../public/img/delivery.png" alt="" />
                        <p className="second-title">Entrega rápida & gratuita</p>
                    </article>
                    <article>
                        <img src="../public/img/servicio.png" alt="" />
                        <p className="second-title">6 meses de servicio gratuito</p>
                    </article>
                    <article>
                        <img src="../public/img/componentes.png" alt="" />
                        <p className="second-title">Repuestos disponibles</p>
                    </article>
                </section>
            </div>
            
            
            
            
            

            
        </div>
    )
}

export default Inicio

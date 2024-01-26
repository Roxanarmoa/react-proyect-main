import "./Form.scss"

const Form = ( { datosForm, guardarDatosInput, enviarOrden} ) => {
return (
    <div >
        <form  className="form" onSubmit={enviarOrden}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput}/>

            <label htmlFor="telefono">Telefono</label>
            <input type="text" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} />

            <label htmlFor="nombre">Email</label>
            <input type="text" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} />

            <button type="submit">Enviar orden</button>
        </form>
    </div>
    )
}
export default Form

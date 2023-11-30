import { useRef, useState } from "react"

function FormNoControlado () {

    const formulario = useRef(null)

    let [error, setError] = useState("Todo está correcto")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("click")
        const datos = new FormData(formulario.current)
        console.log(...datos.entries())

        const objetoDatos = Object.fromEntries([...datos.entries()])

        console.log(objetoDatos)

        const { Nombre, Descripcion, Estado } = objetoDatos

        if (!Nombre.trim() && !Descripcion.trim() && !Estado.trim()) {
            console.log("Error!!!!")
            setError("¡¡No puedes dejar todos los campos vacíos!!")
            return
        }

        if (!Nombre.trim() && !Descripcion.trim()) {
            setError("¡¡No puedes dejar el nombre y la descripcion vacios!!")
            return
        }

        if (!Nombre.trim() && !Estado.trim()) {
            setError("¡¡No puedes dejar el nombre y el estado vacios!!")
            return
        }

        if (!Descripcion.trim() && !Estado.trim()) {
            setError("¡¡No puedes dejar la descripcion y el estado vacios!!")
            return
        }

        if (!Nombre.trim()) {
            setError("¡¡No puedes dejar el nombre vacío!!")
            return
        }

        if(!Descripcion.trim()) {
            setError("¡¡No puedes dejar la descripción vacía!!")
            return
        }
        
        if(!Estado.trim()) {
            setError("¡¡No puedes dejar el estado de la tarea vacío!!")
            return
        } 

        else {
            setError("Todo correcto")
            return
        }

    
    }

     return (
        <>
        <form onSubmit={handleSubmit} ref={formulario}>
            <input
                name="Nombre"
                type="text"
                placeholder="Nombre de la tarea"
                className="form-control mb-2"
            
            >
            </input>

            <textarea
                name="Descripcion"
                placeholder="Introduce la descripción de la tarea"
                className="form-control mb-2"

            >
            </textarea>

            <select
            name="Estado"
            className="form-control mb-2"
            >
                <option value="">Selecciona</option>
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>


            <button type="submit" className="btn btn-primary">Añadir tarea</button>

        </form>

        <p>{error}</p>
        </>
    )
}

export default FormNoControlado;
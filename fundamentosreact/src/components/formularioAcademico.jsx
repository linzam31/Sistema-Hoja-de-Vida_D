import { useState } from "react"

function ForAcademi({ anterior, siguiente }){
    const [Nformacion, setNformacion] = useState ("Bachiller")
    const [institucion, setInstitucion] = useState ("")
    const [año, setAño] = useState ("")
    const [cursos, setCursos] = useState ("")

        const continuar = (e) =>{
        e.preventDefault();
        alert ("Los datos fueron ingresados correctamente")
        if (siguiente){
            siguiente();
        }
    }

    return(
    <div className="formulario">
            <form onSubmit={continuar}>
                <h2>Academico</h2>

                <div className="grupo">
                    <label>Nivel de Formación</label>
                    <select name="Nformacion" id="Nformacion">
                        <option value="">Bachiller</option>
                        <option value="">Tecnico</option>
                        <option value="">Tecnologo</option>
                        <option value="">Profesional</option>
                        <option value="">Especialización</option>
                        <option value="">Maestría</option>
                    </select>
                </div>

                <div className="grupo">
                    <label>Institución Educativa</label>
                    <input type="text" placeholder="Ingrese la institución"/>
                </div>

                <div className="grupo">
                    <label>Título Obtenido</label>
                    <input type="text" placeholder="Ingrese el título"/>
                </div>

                <div className="grupo">
                    <label>Año de Graduación</label>
                    <input type="number" placeholder="2025"/>
                </div>

                <div className="grupo">
                    <label>Cursos Realizados</label>
                    <input type="text" placeholder="Escriba los cursos realizados"/>
                </div>

                <div className="boton">
                    <button type="button" className="btn btn-primary" onClick={anterior}>Anterior</button>
                </div>

                <div className="boton">
                    <button type="submit" className="btn btn-primary">Siguiente</button>
                </div>
            </form>
        </div>
)
}

export default ForAcademi
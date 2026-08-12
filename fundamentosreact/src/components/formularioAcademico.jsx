import { useState } from "react";
function ForAcademi({ persona, setpersona, anterior, siguiente, }){
    /*const [Nformacion, setNformacion] = useState ("Bachiller")
    const [institucion, setInstitucion] = useState ("")
    const [año, setAño] = useState ("")
    const [cursos, setCursos] = useState ("")*/

    //definir el estado de los cursos
    const [nuevoCurso,setNuevoCurso] = useState=("");

    const agregarCurso = () => { 

        if (nuevoCurso.trim() === "") {

            alert("Ingrese el nombre del curso: ");
            
            return;

        }
        
            setDatos ({
                ...datos,
                cursos: [
                    ...datos.cursos,
                    nuevoCurso
                ]

            });

            // Limpiar el campo
            setNuevoCurso("");
        };

    //eliminar curso
    const eliminarCurso = (indice) => {

        const cursosActualizados = datos.cursos.filter(
            (_, i) => i !== indice
        );

        setDatos({
            ...datos,
            cursos: cursosActualizados
        })
    };

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
                    <select name="Nformacion" id="Nformacion"
                    value={persona.nivel} 
                    onChange={(e) => setpersona({...persona, nivel: e.target.value})}>
                        <option value="Bachiller">Bachiller</option>
                        <option value="Tecnico">Tecnico</option>
                        <option value="Tecnologo">Tecnologo</option>
                        <option value="Profesional">Profesional</option>
                        <option value="Especialización">Especialización</option>
                        <option value="Maestría">Maestría</option>
                    </select>
                </div>

                <div className="grupo">
                    <label>Institución Educativa</label>
                    <input type="text" placeholder="Ingrese la institución"
                    value={persona.institucion} 
                    onChange={(e) => setpersona({...persona, institucion: e.target.value})}/>
                </div>

                <div className="grupo">
                    <label>Título Obtenido</label>
                    <input type="text" placeholder="Ingrese el título"
                    value={persona.titulo} 
                    onChange={(e) => setpersona({...persona, titulo: e.target.value})}/>
                </div>

                <div className="grupo">
                    <label>Año de Graduación</label>
                    <input type="number" placeholder="2025"
                    value={persona.anio} 
                    onChange={(e) => setpersona({...persona, anio: e.target.value})}/>
                </div>

                <div className="grupo">
                    <label>Cursos Realizados</label>
                    
                    <div className="curso-agregar">
                        <input type="text" placeholder="Ejemplo: React"
                        value={nuevoCurso} 
                        onChange={(e) => setNuevoCurso(e.target.value)}/>
                        
                        <button type="button" onClick={agregarCurso}>+ Agregar</button>
                    
                    </div>
                </div>

                {/*Lista de Cursos*/}
                <div className="lista-cursos">

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
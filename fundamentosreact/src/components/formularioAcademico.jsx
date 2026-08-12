import { useState } from "react";
function ForAcademi({ persona, setpersona, anterior, siguiente }){
    /*const [Nformacion, setNformacion] = useState ("Bachiller")
    const [institucion, setInstitucion] = useState ("")
    const [año, setAño] = useState ("")
    const [cursos, setCursos] = useState ("")*/

    //definir el estado de los cursos
    const [nuevoCurso,setNuevoCurso] = useState("");

    //agregar curso
    const agregarCurso = () => { 

        if (nuevoCurso.trim() === "") {

            alert("Ingrese el nombre del curso: ");
            
            return;

        }
        
            setpersona({
                ...persona,
                cursos: [
                    ...persona.cursos,
                    nuevoCurso
                ]

            });

            // Limpiar el campo
            setNuevoCurso("");
        };

    //eliminar curso
    const eliminarCurso = (indice) => {

        const cursosActualizados = persona.cursos.filter(
            (_, i) => i !== indice
        );

        setpersona({
            ...persona,
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
                    <input type="text" placeholder="Ingrese la institución" className="input"
                    value={persona.institucion} 
                    onChange={(e) => setpersona({...persona, institucion: e.target.value})}/>
                </div>

                <div className="grupo">
                    <label>Título Obtenido</label>
                    <input type="text" placeholder="Ingrese el título" className="input"
                    value={persona.titulo} 
                    onChange={(e) => setpersona({...persona, titulo: e.target.value})}/>
                </div>

                <div className="grupo">
                    <label>Año de Graduación</label>
                    <input type="number" placeholder="2025" className="input"
                    value={persona.anio} 
                    onChange={(e) => setpersona({...persona, anio: e.target.value})}/>
                </div>

                <div className="grupo">
                    <div>
                        <label>Cursos Realizados</label>
                    </div>

                        <div className="curso-agregar">
                            <input type="text" placeholder="Ejemplo: React" className="input2"
                            value={nuevoCurso} 
                            onChange={(e) => setNuevoCurso(e.target.value)}/>
                          
                            <button type="button" className="boton-curso" onClick={agregarCurso}>+</button>
                          
                        </div>
                </div>

                {/*Lista de Cursos*/}
                <div className="lista-cursos">
                    
                    <ul>
                    {
                        persona.cursos.map(
                            (curso, indice) => (
                                
                            <div className="grupo">
                                <div className="curso" 
                                    key={indice}>
                                        {curso}
                                </div>

                                    <div className="boton-eliminar">
                                        <button type="button" className="eliminar"
                                        onClick={() => eliminarCurso(indice)}>
                                            Eliminar
                                        </button>
                                    </div>
                            </div>
                            )
                        )
                    }
                  
                    </ul>

                </div>
            <div className="boton">
                <div className="botones">
                    <button type="button" className="button" onClick={anterior}>Anterior</button>
                </div>

                <div className="botones">
                    <button type="submit" className="button">Siguiente</button>
                </div>
            </div>    
            </form>
        </div>
)
}

export default ForAcademi
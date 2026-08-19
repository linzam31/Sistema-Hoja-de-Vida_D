function Vista({ persona, anterior }){
    return(
        <div>
            <div className="titulos">
                <h2>Vista Previa</h2>
                <h3>Datos del aprendiz</h3>
            </div>
            <p className="titulos">{persona.foto && <img alt ="foto" src={persona.foto} 
                    style={{
                    width: '200px',
                    height: '200px',
                    'border-radius': '100%',
                    'border': '2px solid #ffffff',
                }}></img>}</p>

            <p><strong>Nombre: </strong>{persona.nombre}</p>
            <p><strong>Edad: </strong>{persona.edad}</p>
            <p><strong>Ciudad: </strong>{persona.ciudad}</p>
            <p><strong>Programa: </strong>{persona.programa}</p>
            <p><strong>Correo: </strong>{persona.correo}</p>
            <p><strong>Ficha: </strong>{persona.ficha}</p>
            <p><strong>Jornada: </strong>{persona.jornada}</p>

            <h3 className="titulos">Datos de Estudio</h3>
            <p><strong>Nivel de Estudio: </strong>{persona.nivel}</p>
            <p><strong>Institucion educativa: </strong>{persona.institucion}</p>
            <p><strong>Título Obtenido: </strong>{persona.titulo}</p>
            <p><strong>Año de Graduación: </strong>{persona.anio}</p>

            <div className="detalle">
                <span><strong>Cursos Realizados: </strong></span>
            </div>

                        {(persona.cursos || []).map((curso, indice) => (
                <p key={indice}>- {curso}</p>
            ))}

            
            <h3 className="titulos">Datos de Experiencia Laboral</h3>

                {(persona.experiencias || []).map((exp, indice) => (
                    <div
                        key={indice}
                        className="tarjeta-resumen-experiencia"
                        style={{
                            border: "1px solid #a3a0a0",
                            padding: "12px",
                            borderRadius: "6px",
                            marginBottom: "12px",
                            backgroundColor: "rgba(255, 255, 255, 0.05)" 
                        }}
                    >
                        <h3><strong>{indice + 1}. {exp.cargo}</strong> en <em>{exp.empresa}</em></h3>
                        <p style={{ margin: "4px 0" }}><strong>Tiempo:</strong> {exp.tiempo || "No especificado"}</p>
                        <p style={{ margin: "4px 0" }}><strong>Funciones:</strong> {exp.funciones || "No especificadas"}</p>
                        <p style={{ margin: "4px 0" }}><strong>Habilidades:</strong> {exp.habilidades || "No especificadas"}</p>
                    </div>
                ))
            }

            <div className="boton">
                <div className="botones">
                    <button type="button" className="button" onClick={anterior}>Anterior</button>
                </div>
                <div className="botones">
                    <button type="button" className="button">Confirmar Registro</button>
                </div>
            </div>
        </div> 

    )
}

export default Vista 
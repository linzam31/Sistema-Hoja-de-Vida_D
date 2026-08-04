function Vista({ persona, anterior }){
    return(
        <div>
            <h2>Vista Previa</h2>
            <h3>Datos del aprendiz</h3>

            <p className="text-center">{persona.foto && <img alt ="foto" src={persona.foto} 
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

            <h3>Datos de Estudio</h3>
            <p><strong>Nivel de Estudio: </strong>{persona.nivel}</p>
            <p><strong>Institucion educativa: </strong>{persona.institucion}</p>
            <p><strong>Título Obtenido: </strong>{persona.titulo}</p>
            <p><strong>Año de Graduación: </strong>{persona.anio}</p>
            <p><strong>Cursos Realizados: </strong>{persona.cursos}</p>

            <h3>Datos de Experiencia</h3>
            <p><strong>Empresa: </strong>{persona.empresa}</p>
            <p><strong>Cargo: </strong>{persona.cargo}</p>
            <p><strong>Tiempo de Experiencia: </strong>{persona.experiencia}</p>
            <p><strong>Funciones desempeñadas: </strong>{persona.funciones}</p>
            <p><strong>Habilidades Técnicas: </strong>{persona.habilidades}</p>


            <div className="boton">
                <button type="button" className="btn btn-primary" onClick={anterior}>Anterior</button>
            </div>
        </div> 

    )
}

export default Vista 
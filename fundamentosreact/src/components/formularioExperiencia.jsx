function FormExp({ persona, setpersona, anterior, siguiente }){

    /*const [empresa, setEmpresa] = useState ("")
    const [cargo, setCargo] = useState ("")
    const [tiempo, setTiempo] = useState ("")
    const [funciones, setFunciones] = useState ("")
    const [habilidades, setHabilidades] = useState ("")*/

        //const 

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
                <h2>Experiencia Laboral</h2>

                <div className="grupo">
                    <label>Empresa</label>
                    <input type="text" placeholder="Nombre de la Empresa" className="input"
                    value={persona.empresa} 
                    onChange={(e) => setpersona({...persona, empresa: e.target.value})}
                    />
                </div>

                <div className="grupo">
                    <label>Cargo</label>
                    <input type="text" placeholder="Cargo desempeñado" className="input"
                    value={persona.cargo} 
                    onChange={(e) => setpersona({...persona, cargo: e.target.value})}/>
                </div>

                <div className="grupo">
                    <label>Tiempo de experiencia</label>
                    <input type="text" placeholder="Ejemplo: 1 año" className="input"
                    value={persona.experiencia} 
                    onChange={(e) => setpersona({...persona, experiencia: e.target.value})}/>
                </div>

                <div className="grupo">
                    <label>Funciones desempeñadas</label>
                    <input type="text" placeholder="Describa las funciones realizadas" className="input"
                    value={persona.funciones} 
                    onChange={(e) => setpersona({...persona, funciones: e.target.value})}/>
                </div>

                <div className="grupo">
                    <label>Habilidades Técnicas</label>
                    <input type="text" placeholder="Describa las dunciones realizadas" className="input"
                    value={persona.habilidades} 
                    onChange={(e) => setpersona({...persona, habilidades: e.target.value})}/>
                </div>

            <div className="boton">
                <div className="botones">
                    <button type="button" className="button" onClick={anterior}>Anterior</button>
                </div>

                <div className="botones">
                    <button type="submit" className="button">Vista Previa</button>
                </div>
            </div>
            </form>
        </div>

    )
}

export default FormExp
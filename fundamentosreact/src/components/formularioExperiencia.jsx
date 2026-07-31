import { useState } from "react"
function FormExp({ anterior }){

    const [empresa, setEmpresa] = useState ("")
    const [cargo, setCargo] = useState ("")
    const [tiempo, setTiempo] = useState ("")
    const [funciones, setFunciones] = useState ("")
    const [habilidades, setHabilidades] = useState ("")

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
                <h2>Datos Empresa</h2>

                <div className="grupo">
                    <label>Empresa</label>
                    <input type="text" placeholder="Nombre de la Empresa"/>
                </div>

                <div className="grupo">
                    <label>Cargo</label>
                    <input type="text" placeholder="Cargo desempeñado"/>
                </div>

                <div className="grupo">
                    <label>Tiempo de experiencia</label>
                    <input type="text" placeholder="Ejemplo: 1 año"/>
                </div>

                <div className="grupo">
                    <label>Funciones desempeñadas</label>
                    <input type="text" placeholder="Describa las dunciones realizadas"/>
                </div>

                <div className="grupo">
                    <label>Habilidades Técnicas</label>
                    <input type="text" placeholder="Describa las dunciones realizadas"/>
                </div>

                <div className="boton">
                    <button type="button" className="btn btn-primary" onClick={anterior}>Anterior</button>
                </div>

                <div className="boton">
                    <button type="submit" className="btn btn-primary">Vista Previa</button>
                </div>
            </form>
        </div>

    )
}

export default FormExp
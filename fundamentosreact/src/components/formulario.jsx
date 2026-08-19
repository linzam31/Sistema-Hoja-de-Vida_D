function Formulario({ persona, setpersona, siguiente }) {
    /*const [foto, setFoto] = useState(null);
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [correo, setCorreo] = useState("");
    const [programa, setPrograma] = useState("");
    const [ficha, setFicha] = useState("");
    const [jornada, setJornada] = useState("Mañana");*/


    const validar = () => {
        if (!persona.nombre) {
            alert("El nombre es obligatorio");
            return false;
        }

        if (!persona.edad) {
            alert("La edad es obligatoria");
            return false;
        }

        if (!persona.ciudad) {
            alert("La ciudad es obligatoria");
            return false;
        }
        
        if (!persona.programa) {
            alert("El programa es obligatorio");
            return false;
        }
        if (!persona.correo.includes("@")) {
            alert("El correo no es válido");
            return false;
        }
        if (!persona.ficha) {
            alert("El número de ficha es obligatoria");
            return false;
        }

        return true;
    }

    const continuar = (e) => {
        e.preventDefault();

        if (!validar()) {
            return;
        }

        alert("Los datos fueron ingresados correctamente");

        if (siguiente) {
            siguiente();
        }
    }
    
    return (
        <div className="formulario">
            <form onSubmit = {continuar}>
                <h2 className="titulos">Registro de Aprendices</h2>

                <div className="grupo">
                    <label>Fotografía</label>
                    <input type="file" accept="image/*" className="input"
                    onChange={(e) => {
                        const archivo = e.target.files[0];
                        if (archivo) {
                            setpersona({...persona,foto: URL.createObjectURL(archivo)});
                        }
                    }}/>
                </div>
                <div className="grupo">
                    <label>Nombre completo</label>
                    <input type="text" placeholder="Ingrese su nombre completo" className="input"
                    value={persona.nombre} 
                    onChange={(e) => setpersona({...persona, nombre: e.target.value})}/>
                </div>
                <div className="grupo">
                    <label>Edad</label>
                    <input type="number" placeholder="Ingrese su edad" className="input"
                    value={persona.edad} 
                    onChange={(e) => setpersona({...persona, edad: e.target.value})}/>
                </div>
                <div className="grupo">
                    <label>Ciudad</label>
                    <input type="text" placeholder="Ingrese su ciudad" className="input"
                    value={persona.ciudad} 
                    onChange={(e) => setpersona({...persona, ciudad: e.target.value})}/>
                </div>
                <div className="grupo">
                    <label>Programa de formación</label>
                    <input type="text" placeholder="Ejemplo: ADSO" className="input"
                    value={persona.programa} 
                    onChange={(e) => setpersona({...persona, programa: e.target.value})}/>
                </div>
                <div className="grupo">
                    <label>Correo electronico</label>
                    <input type="email" placeholder="correo@ejemplo.com" className="input"
                    value={persona.correo} 
                    onChange={(e) => setpersona({...persona, correo: e.target.value})}/>
                </div>
                <div className="grupo">
                    <label>Número de ficha</label>
                    <input type="number" placeholder="Ingrese su número de ficha" className="input"
                    value={persona.ficha} 
                    onChange={(e) => setpersona({...persona, ficha: e.target.value})}/>
                </div>
                <div className="grupo">
                    <label>Jornada</label>
                    <select name="jornada" id="jornada" 
                    value={persona.jornada} 
                    onChange={(e) => setpersona({...persona, jornada: e.target.value})}>
                        <option value="mañana">Mañana</option>
                        <option value="tarde">Tarde</option>
                        <option value="noche">Noche</option>
                        <option value="mixta">Mixta</option>
                    </select>
                </div>
                <div className="botones">
                    <button  type="submit" className="button">Continuar registro</button>
            </div>  
            </form>
        </div>
    )
}

export default Formulario
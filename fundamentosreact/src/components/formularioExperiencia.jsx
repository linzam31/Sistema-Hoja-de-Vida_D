import { useState } from "react";
import Modal from "./Modal";

function FormularioExperiencia({ persona, setpersona, anterior, siguiente }) {
    const [modalAbierto, setModalAbierto] = useState(false);

    const [empresa, setEmpresa] = useState("");
    const [cargo, setCargo] = useState("");
    const [experiencia, setExperiencia] = useState("");
    const [funciones, setFunciones] = useState("");
    const [habilidadesLocal, setHabilidadesLocal] = useState("");

    const guardarExperienciaTotal = (e) => {
        e.preventDefault();

        if (empresa.trim() === "") {
            alert("La empresa es obligatoria");
            return;
        }

        if (cargo.trim() === "") {
            alert("El cargo es obligatorio");
            return;
        }

        if (experiencia.trim() === "") {
            alert("El tiempo de experiencia es obligatorio");
            return;
        }

        if (funciones.trim() === "") {
            alert("Las funciones desempeñadas son obligatorias");
            return;
        }

        if (habilidadesLocal.trim() === "") {
            alert("Las habilidades técnicas son obligatorias");
            return;
        }

        const nuevaExperiencia = {
            empresa: empresa.trim(),
            cargo: cargo.trim(),
            tiempo: experiencia.trim(),
            funciones: funciones.trim(),
            habilidades: habilidadesLocal.trim()
        };

        setpersona({
            ...persona,
            experiencias: [
                ...(persona.experiencias || []),
                nuevaExperiencia
            ]
        });

        setEmpresa("");
        setCargo("");
        setExperiencia("");
        setFunciones("");
        setHabilidadesLocal("");

        setModalAbierto(false);
    };

    const eliminarExperiencia = (indice) => {
        const experienciasActualizadas = (persona.experiencias || []).filter(
            (_, i) => i !== indice
        );

        setpersona({
            ...persona,
            experiencias: experienciasActualizadas
        });
    };

    const continuar = (e) => {
        e.preventDefault();

        if (!persona.experiencias || persona.experiencias.length === 0) {
            alert("Debe agregar al menos una experiencia laboral antes de continuar.");
            return;
        }

        alert("Registro completado correctamente");

        if (siguiente) {
            siguiente();
        }
    };

    return (
        <div className="formulario">
            <h2 className="titulos">Experiencia Laboral</h2>

            <div className="boton" style={{ marginBottom: "20px" }}>
                <button
                    type="button"
                    className="button"
                    onClick={() => setModalAbierto(true)}
                >
                    + Añadir Experiencia Laboral
                </button>
            </div>

            <Modal
                isOpen={modalAbierto}
                onClose={() => setModalAbierto(false)}
                titulo="Registrar Experiencia"
            >
                <form onSubmit={guardarExperienciaTotal}>
                    <div className="grupo">
                        <label>Empresa</label>
                        <input
                            type="text"
                            placeholder="Nombre de la empresa"
                            className="input"
                            value={empresa}
                            onChange={(e) => setEmpresa(e.target.value)}
                        />
                    </div>

                    <div className="grupo">
                        <label>Cargo</label>
                        <input
                            type="text"
                            placeholder="Cargo desempeñado"
                            className="input"
                            value={cargo}
                            onChange={(e) => setCargo(e.target.value)}
                        />
                    </div>

                    <div className="grupo">
                        <label>Tiempo de Experiencia</label>
                        <input
                            type="text"
                            placeholder="Ej: 1 año"
                            className="input"
                            value={experiencia}
                            onChange={(e) => setExperiencia(e.target.value)}
                        />
                    </div>

                    <div className="grupo">
                        <label>Funciones Desempeñadas</label>
                        <textarea
                            placeholder="Describa las funciones realizadas."
                            className="input"
                            value={funciones}
                            onChange={(e) => setFunciones(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="grupo">
                        <label>Habilidades Técnicas</label>
                        <input
                            type="text"
                            placeholder="HTML, CSS, JavaScript..."
                            className="input"
                            value={habilidadesLocal}
                            onChange={(e) => setHabilidadesLocal(e.target.value)}
                        />
                    </div>

                    <div className="botones">
                        <button className="button" type="submit">
                            Agregar Experiencia
                        </button>
                    </div>
                </form>
            </Modal>

            <div className="lista-experiencias">
                {(persona.experiencias || []).map((exp, indice) => (
                    <div
                        key={indice}
                        className="tarjeta-experiencia"
                        style={{
                            border: "1px solid #b1b0b0",
                            padding: "15px",
                            borderRadius: "8px",
                            marginBottom: "15px",
                            position: "relative"
                        }}
                    >
                        <h3>
                            {exp.cargo} en <strong>{exp.empresa}</strong>
                        </h3>

                        <p>
                            <strong>Tiempo:</strong> {exp.tiempo}
                        </p>

                        <p>
                            <strong>Funciones:</strong> {exp.funciones}
                        </p>

                        <p>
                            <strong>Habilidades:</strong> {exp.habilidades}
                        </p>

                        <div
                            className="boton-eliminar"
                            style={{ marginTop: "10px" }}
                        >
                            <button
                                type="button"
                                className="eliminar"
                                onClick={() => eliminarExperiencia(indice)}
                            >
                                Eliminar experiencia
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={continuar}>
                <div className="boton">
                    <div className="botones">
                        <button
                            className="button"
                            type="button"
                            onClick={anterior}
                        >
                            Anterior
                        </button>
                    </div>

                    <div className="botones">
                        <button className="button" type="submit">
                            Siguiente
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormularioExperiencia;
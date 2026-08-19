import { useRef, useEffect } from "react";

function Modal({ isOpen, onClose, titulo, children }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog) return;

        if (isOpen && !dialog.open) {
            dialog.showModal();
        }

        if (!isOpen && dialog.open) {
            dialog.close();
        }
    }, [isOpen]);

    const manejarClickFondo = (e) => {
        if (e.target === dialogRef.current) {
            onClose();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            onClick={manejarClickFondo}
            className="modal-nativo"
            style={{
                border: "1px solid #a8a5a5",
                borderRadius: "10px",
                padding: "20px",
                maxWidth: "500px",
                width: "90%",
                color: "#000000",
                background: "rgb(223, 223, 223)"
            }}
        >
            <div className="modal-contenido">
                <div
                    className="modal-header"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid #504f4f",
                        paddingBottom: "10px",
                        marginBottom: "15px"
                    }}
                >
                    <h3>{titulo}</h3>

                    <button
                        type="button"
                        onClick={onClose}
                        style={{
                            background: "none",
                            border: "none",
                            fontSize: "24px",
                            cursor: "pointer",
                            color: "#7e7d7d"
                        }}
                    >
                        ×
                    </button>
                </div>

                <div className="modal-body">
                    {children}
                </div>
            </div>
        </dialog>
    );
}

export default Modal;
import React from "react";

function UseState({ name }) {
    const [error, setError] = React.useState(true);
    return (
        <div>
            <h2>ELIMINAR {name}</h2>
            <p>Escribe el codiogo de seguridad</p>

            {error && (
                <p>
                    Error: codigo incorrercto
                </p>
            )}
            <input placeholder="codigo de seguridad"/>
            <button
                onClick={() => setError(!error)}>Comprobar</button>
        </div>
    )
}

export { UseState };
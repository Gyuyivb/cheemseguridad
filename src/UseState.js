import React from "react";

function UseState({ name }) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() =>{
        console.log('funcionando empezando')
        if (!!loading) {
            setTimeout(() => {
                console.log('Validandooo validandooo')
    
                setLoading(false);
    
                console.log('terminando la validacion')
            }, 3000);   
        }
        console.log('funcionando terminando')
        
    }, [loading])
    return (
        <div>
            <h2>ELIMINAR {name}</h2>
            <p>Escribe el codiogo de seguridad</p>

            {loading && (
                <p>
                    Cargando...
                </p>
            )}

            {error && (
                <p>
                    Error: codigo incorrercto
                </p>
            )}
            <input placeholder="codigo de seguridad"/>
            <button
                onClick={() => setLoading(true)}>Comprobar</button>
        </div>
    )
}

export { UseState };
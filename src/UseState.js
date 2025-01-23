import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    console.log('hola  >  ', value)

    React.useEffect(() =>{
        console.log('funcionando empezando')
        if (!!loading) {
            setTimeout(() => {
                console.log('Validandooo validandooo')
    
                if (value === SECURITY_CODE) {
                    setLoading(false);    
                    //setError(true);
                }else{
                    setError(true);
                    setLoading(false);
                }
    
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
            <input 
                placeholder="codigo de seguridad"
                value={value}
                onChange={(event) => {
                    //setError(false); //no es conveniente porque se actualiza cada que cambia el input
                    setValue(event.target.value);
                }}/>
            <button
                onClick={() => {
                    setLoading(true)
                    setError(false)}}>Comprobar</button>
        </div>
    )
}

export { UseState };
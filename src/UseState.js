import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '0',
        error: false,
        loading: false,
    })

    // const [value, setValue] = React.useState('');
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);
    console.log('hola  >  ', state.value)

    React.useEffect(() =>{
        console.log('funcionando empezando')
        if (!!state.loading) {
            setTimeout(() => {
                console.log('Validandooo validandooo')
    
                if (state.value === SECURITY_CODE) {
                    setState({
                        ...state,
                        loading: false,
                    });
                    //setLoading(false);    
                    //setError(true);
                }else{
                    setState({
                        ...state,
                        error: true,
                        loading: false,
                    });
                    // setError(true);
                    // setLoading(false);
                }
    
                console.log('terminando la validacion')
            }, 3000);   
        }
        console.log('funcionando terminando')
        
    }, [state.loading])
    return (
        <div>
            <h2>ELIMINAR {name}</h2>
            <p>Escribe el codiogo de seguridad</p>

            {state.loading && (
                <p>
                    Cargando...
                </p>
            )}
            {state.error && (
                <p>
                    Error: codigo incorrercto
                </p>
            )}
            <input 
                placeholder="codigo de seguridad"
                value={state.value}
                onChange={(event) => {
                    //setError(false); //no es conveniente porque se actualiza cada que cambia el input
                    setState({
                        ...state,
                        value: event.target.value, 
                    });
                    // setValue(event.target.value);
                }}/>
            <button
                onClick={() => {
                    setState({
                        ...state,
                        error: false,
                        loading: true,
                    });
                    // setLoading(true)
                    // setError(false)
                }}
                    >Comprobar</button>
        </div>
    )
}

export { UseState };
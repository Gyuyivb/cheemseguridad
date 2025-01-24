import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    })
    // const [value, setValue] = React.useState('');
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);
    console.log(state)

    React.useEffect(() =>{
        console.log('funcionando empezando')
        if (!!state.loading) {
            setTimeout(() => {
                console.log('Validandooo validandooo')
    
                if (state.value === SECURITY_CODE) {
                    setState({
                        ...state,
                        error: false,
                        loading: false,
                        confirmed: true,
                    });
                    console.log('sadsa: ', state.confirmed)
                    //setLoading(false);
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
            }, 2000);   
        }
        console.log('funcionando terminando')
        
    }, [state.loading])

    if (!state.deleted && !state.confirmed) {
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }else if (!!state.confirmed && !state.deleted) {
       return(
        <React.Fragment>
         <h2>ELIMINAR {name}</h2>
         <p>Necesito confirmacion, seguro?</p>
         <button 
         onClick={() => {
            setState({
                ...state,
                deleted: true,
            });
         }}>
            Si, eliminalo
         </button>
         <button
          onClick={() => {
            setState({
                ...state,
                value: '',
                confirmed: false,
            });
         }}>
            No, me arrepienti
        </button>
        </React.Fragment>
       ); 
    }else{
        return(
            <React.Fragment>
            <p>Elimiando perro</p>
            <button
            onClick={()=>{
                setState({
                    ...state,
                    value: '',
                    deleted: false,
                    confirmed: false,
                })
            }}>
                Reestablecer
            </button>
            </React.Fragment>
        )
    }

}

export { UseState };
import React from "react";

const SECURITY_CODE = 'paradigma';

function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
 
    // const onWrite = (newValue) => {
    //     setState({
    //         ...state,
    //         value: newValue, 
    //     });
    // };
   
    console.log(state)

    React.useEffect(() =>{
        console.log('funcionando empezando')
        if (!!state.loading) {
            setTimeout(() => {
                console.log('Validandooo validandooo')
    
                if (state.value === SECURITY_CODE) {
                    dispatch({ type: 'CONFIRM'});
                    console.log('dnbshjad: ', state)
                }else{
                    dispatch({type: 'ERROR',});
                }
    
                console.log('terminando la validacion')
            }, 1000);   
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
                        dispatch({type: 'WRITE', payload: event.target.value})
                        //onWrite(event.target.value);
                    }}/>
                <button
                    onClick={() => {
                        dispatch({type: 'CHECK',})
                        //onCheck();
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
           dispatch({type: 'DELETE'})
            //onDelete();
         }}>
            Si, eliminalo
         </button>
         <button
          onClick={() => {
            dispatch({type: 'RESET'})
            //onReset();
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
                dispatch({type: 'RESET'})
                //onReset();
            }}>
                Reestablecer
            </button>
            </React.Fragment>
        )
    }

}

const initialState =  {
    value: 'paradigma',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
};

// const reducerIF = (state, action) => {
//     if (action.type === 'ERROR') {
//         return {
//             ...state,
//             error: true,
//             loading: false,
//         }
//     } else if (action.type === 'CONFIRM') {
//         return {
//             ...state,
//             error: false,
//             loading: false,
//             confirmed: true,
//         }
//     } else {
//         return {
//             ...state,
//         }
//     }
//  }

//  const reducerSWITCH = (state, action) => {
//     switch (action.type) {
//         case 'ERROR':
//             return {
//                 ...state,
//                 error: true,
//                 loading: false,
//             };
//         case 'CONFIRM':
//             return {
//                 ...state,
//                 error: false,
//                 loading: false,
//                 confirmed: true,
//             };
//         default:
//             return {
//                 ...state,
//             };
//     }
//  }
 const reducerOBJECT = (state, payload) => ({
    'CONFIRM': {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
     },
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    'WRITE': {
        ...state,
         value: payload
    },
    'CHECK': {
        ...state,
        error: false,
        loading: true,
    },
    'DELETE': {
        ...state,
        deleted: true,
    },
    'RESET': {
        ...state,
        value: '',
        deleted: false,
        confirmed: false,
    },
 })
  
 const reducer = (state, action) => {
    if (reducerOBJECT(state)[action.type]) {
        return reducerOBJECT(state, action.payload)[action.type];
    } else {
        return {
            ...state,
        }
    }
 }

export { UseReducer };
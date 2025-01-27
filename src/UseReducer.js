import React from "react";

const SECURITY_CODE = 'paradigma';

function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
 
    const onConfirm = () =>{
        dispatch({ type: actionTypes.confirm});
    };
    const onError = () => {
        dispatch({ type: actionTypes.error});
    };
    const onWrite = (newValue) => {
        dispatch({ type: actionTypes.write, payload: newValue});
    };
    const onCheck = () => {
        dispatch({ type: actionTypes.check});
    };
    const onDelete = () => {
        dispatch({ type: actionTypes.delete});
    };
    const onReset = () => {
        dispatch({ type: actionTypes.reset});
    };
   
    console.log(state)

    React.useEffect(() =>{
        console.log('funcionando empezando')
        if (!!state.loading) {
            setTimeout(() => {
                console.log('Validandooo validandooo')
    
                if (state.value === SECURITY_CODE) {
                    onConfirm();
                    console.log('dnbshjad: ', state)
                }else{
                    onError();
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
                        onWrite(event.target.value);
                    }}/>
                <button
                    onClick={() => {
                        dispatch({type: 'CHECK',})
                        onCheck();
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
           dispatch({type:actionTypes.delete})
            onDelete();
         }}>
            Si, eliminalo
         </button>
         <button
          onClick={() => {
            dispatch({type: actionTypes.reset})
            onReset();
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
                dispatch({type: actionTypes.reset})
                //onReset();
            }}>
                Reestablecer
            </button>
            </React.Fragment>
        )
    }

}

const initialState =  {
    value: '',
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
const actionTypes = {
    error: 'ERROR',
    confirm: 'CONFIRM',
    write: 'WRITE',
    check: 'CHECK',
    delete: 'DELETE',
    reset: 'RESET',
 }

 const reducerOBJECT = (state, payload) => ({
    [actionTypes.confirm]: {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
     },
    [actionTypes.error]: {
        ...state,
        error: true,
        loading: false,
    },
    [actionTypes.write]: {
        ...state,
         value: payload
    },
    [actionTypes.check]: {
        ...state,
        error: false,
        loading: true,
    },
    [actionTypes.delete]: {
        ...state,
        deleted: true,
    },
    [actionTypes.reset]: {
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
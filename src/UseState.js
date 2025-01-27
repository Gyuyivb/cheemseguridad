import React from "react";
import './styles.css'

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
    const onConfirm = () =>{
        setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true,
        });
    };
    const onError = () => {
        setState({
            ...state,
            error: true,
            loading: false,
        });
    };
    const onWrite = (newValue) => {
        setState({
            ...state,
            value: newValue, 
        });
    };
    const onCheck = () => {
        setState({
            ...state,
            error: false,
            loading: true,
        });
    };
    const onDelete = () => {
        setState({
            ...state,
            deleted: true,
        });
    };
    const onReset = () => {
        setState({
            ...state,
            value: '',
            deleted: false,
            confirmed: false,
        });
    };
    console.log(state)

    React.useEffect(() =>{
        console.log('funcionando empezando')
        if (!!state.loading) {
            setTimeout(() => {
                console.log('Validandooo validandooo')
    
                if (state.value === SECURITY_CODE) {
                    onConfirm();
                    //setLoading(false);
                }else{
                    onError();
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
                <h2>Delete with {name}</h2>
                <p>Write the security code</p>
    
                {state.loading && (
                    <p>
                        Loaaading...
                    </p>
                )}
                {state.error && (
                    <p>
                        Error: wrong code!!!!
                    </p>
                )}
                <input 
                    placeholder="codigo de seguridad"
                    value={state.value}
                    onChange={(event) => {
                        onWrite(event.target.value);
                        //setError(false); //no es conveniente porque se actualiza cada que cambia el input
                        // setValue(event.target.value);
                    }}/>
                <button
                    onClick={() => {
                        onCheck();
                        // setLoading(true)
                        // setError(false)
                    }}
                        >Check</button>
            </React.Fragment>
        )
    }else if (!!state.confirmed && !state.deleted) {
       return(
        <React.Fragment>
         <h2>Delete with {name}</h2>
         <p>I need confirmation, are you sure you want to delete it?</p>
         <button 
         onClick={() => {
           onDelete();
         }}>
            Oh yeah, delete it
         </button>
         <button
          onClick={() => {
            onReset();
         }}>
            No, pls I ragret
        </button>
        </React.Fragment>
       ); 
    }else{
        return(
            <React.Fragment>
            <h2>Delete with {name}</h2>
            <p>It's deleted, dog</p>
            <button
            onClick={()=>{
                onReset();
            }}>
                Restore
            </button>
            </React.Fragment>
        )
    }

}

export { UseState };
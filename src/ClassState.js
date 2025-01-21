import React from "react";

class ClassState extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: false,
        }
    }
    render() {
        return (
            <div>
                <h2>ELIMINAR {this.props.name}</h2>
                <p>Escribe el codiogo de seguridad</p>
                
                {this.state.error && (
                    <p>
                        Error: codigo incorrercto
                    </p>
                )}
                <input placeholder="codigo de seguridad"/>
                <button
                onClick={() => 
                    this.setState(prevState => ({error:!prevState.error}))
                }
                >Comprobar</button>
            </div>
        )
    }
}
export { ClassState }; 

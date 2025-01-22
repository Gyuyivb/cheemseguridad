import React from "react";
import { Loading } from "./Loading";

class ClassState extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loading: false,
        };
    }

    // UNSAFE_componentWillMount() {
    //     console.log('componentWillMount');
    // }

    // componentDidMount() {
    //     console.log('ComponentDidMount');
    // }

    componentDidUpdate() {
        console.log('actualizacion')
        if (!!this.state.loading) {
            setTimeout(() => {
                console.log('Validandooo validandooo')
    
                this.setState({ loading: false });
    
                console.log('terminando la validacion')
            }, 3000); 
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
                 {this.state.loading && (
                    <Loading>
                        Cargadoooo...
                    </Loading>
                )}
                <input placeholder="codigo de seguridad"/>
                <button
                onClick={() => 
                    this.setState({ loading: true})
                }
                >Comprobar</button>
            </div>
        )
    }
}
export { ClassState }; 

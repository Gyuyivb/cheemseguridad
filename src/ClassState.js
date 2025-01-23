import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = 'paradigm';

class ClassState extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
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
    
                if(SECURITY_CODE === this.state.value){
                    this.setState({ error: false, loading: false });
                }else{                    
                    this.setState({ error: true, loading: false });
                }
    
                console.log('terminando la validacion')
            }, 3000); 
        }
    }

    render() {
        return (
            <div>
                <h2>DETELE {this.props.name}</h2>
                <p>Wirte your security code</p>
                
                {(this.state.error && !this.state.loading) && (
                    <p>
                        Error: incorrect code
                    </p>
                )}
                 {this.state.loading && (
                    <Loading>
                        Loooooading...
                    </Loading>
                )}
                <input 
                    placeholder="security code"
                    value={this.state.value}
                    onChange={(event) => {
                        this.setState({ value: event.target.value });
                    }}
                    />
                <button
                onClick={() => 
                    this.setState({ loading: true})
                }
                >Check</button>
            </div>
        )
    }
}
export { ClassState }; 

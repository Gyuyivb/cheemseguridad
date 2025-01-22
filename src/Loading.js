import React from "react";

class Loading extends React.Component{
    componentWillUnmount() {
        console.log('ComponentWillUnmount');        
    }
    
    render(){
        return (
            <p>Cargadoooo...</p>
        );
    }
}

export { Loading }

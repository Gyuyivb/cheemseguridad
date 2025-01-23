import React from "react";

class Loading extends React.Component{
    componentWillUnmount() {
        console.log('ComponentWillUnmount');        
    }

    render(){
        return (
            <p>Loooooading...</p>
        );
    }
}

export { Loading }

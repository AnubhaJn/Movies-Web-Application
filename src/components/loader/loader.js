import React from 'react';
import "./loader.css";

class Loader extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
           <div className ="loader">
           <img src="https://i.pinimg.com/originals/f9/a7/58/f9a758523a11e5e2dd590345ddf5f2ed.gif" alt="logo"></img>
           </div>
        )
    }
}

export default Loader;
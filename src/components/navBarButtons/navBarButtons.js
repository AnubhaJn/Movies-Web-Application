import React from 'react';

import "./navBarButtons.css";

class NavBarButtons extends React.Component{
    constructor(props){
        super(props);
        this.state ={};
    }

    render(){
        return(
            <div className="navbar-buttons">
               {this.props.text}
            </div>
        )
    }
}

export default NavBarButtons;
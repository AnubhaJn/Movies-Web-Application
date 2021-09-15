import React from 'react';
import NavBarButtons from '../navBarButtons/navBarButtons';
import "./navBar.css";

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
           <div className ="navbar">
           <img className="logo" src ="https://www.iamherelearning.com/wp-content/uploads/2020/02/Movie-Icon-1-460x406.png" alt="logo"></img>
               <NavBarButtons text="Home" />
               <NavBarButtons text="Movies" />
               <NavBarButtons text="About Us" />
               <NavBarButtons text="Contact Us" />
               
           </div>
        )
    }
}

export default NavBar;
import React from 'react';
import SideBarButtons from '../sideBarButtons/sideBarButtons';
import "./sideBar.css";

class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
           <div className ="sidebar">
               <SideBarButtons text="All Genre" />
               <SideBarButtons text="Comedy" />
               <SideBarButtons text="Drama" />
               <SideBarButtons text="Fictional" />
               <SideBarButtons text="Emotional" />
               <SideBarButtons text="Action" />
               <SideBarButtons text="Romance" />
               <SideBarButtons text="Dance" />
           </div>
        )
    }
}

export default SideBar;
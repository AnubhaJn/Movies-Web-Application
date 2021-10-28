import React from 'react';
import {Switch,Route,BrowserRouter} from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import MoviesList from "./container/moviesList/moviesList";

class Navigator extends React.Component{
    render(){
        return(
            <BrowserRouter>
              <Switch>
                <Route path="/" component={MoviesList}></Route>
                {/* <Route path="/header" component={NavBar}></Route> */}
              </Switch>
            </BrowserRouter>
        );
    }
}

export default Navigator;
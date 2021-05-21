import React, { Component } from 'react';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Cultivos from './components/Cultivos'

class App extends Component{


    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={Login}  />
                    <Route exact={true} path="/cultivos" component={Cultivos}  />
                </Switch>
            </BrowserRouter>

        );
    }
}

export default App;
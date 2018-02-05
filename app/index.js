import React from 'react';

import { Switch, Route } from 'react-router'
import { NavLink } from 'react-router-dom'

import Home from './home';
import Dashboard from './dashboard';



class App extends React.Component {

  render(){
    return (
      <div>
        <h1>MUI ISSUE</h1>
        <NavLink to="/">Access Home Page</NavLink>
        <br/>     
        <br/>   
        <NavLink to="/dashboard">Access MUI Dashboard Page</NavLink>
        <br/>
        <br/>
        <hr/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/" component={ (props) => <h1> 404 </h1> }/>
        </Switch>
      </div>
    )
  }

}

export default App;
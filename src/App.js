import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter, Switch, Route } from  'react-router-dom'
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/login" component={SignIn}/>
        <Route path='/createAccount' component={SignUp}/>
        <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

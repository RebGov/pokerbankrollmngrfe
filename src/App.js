import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter, Switch, Route } from  'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './pages/Home';

class App extends Component {
  // comonentDidMount(){
  //   this.props.getUserData()
  // }
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
//need to send handleChange and handleSubmit to both signIn and signUp pages.

export default App;

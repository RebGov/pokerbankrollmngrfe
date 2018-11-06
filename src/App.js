import React, { Component } from 'react';
// import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from  'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './pages/Home';
import { getUserData } from './actions/userActions';
import { getAllBlindsList } from './actions/blindsNameActions';
import { getAllLocationsList} from './actions/gameLocationActions';
import { getAllGameNamesList } from './actions/gameNameActions'
import { getAllNotes } from './actions/noteActions'

// import { getAllBlindsList } from './actions/blindsNameActions';

class App extends Component {
  // componentDidMount(){
  //   // this.props.getAllNotes()
  //   // this.props.getAllGameNamesList()
  //   // this.props.getAllBlindsList()
  //   // this.props.getAllLocationsList()
  //
  // }

  render() {
    console.log('AppPage : ', this.props.jwt)
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
const mapStateToProps = ( state ) => {
  return {
       jwt: state.jwt,
  }
}
const mapDispatchToProps = {
  // getAllNotes: getAllNotes,
  // getAllGameNamesList: getAllGameNamesList,
  // getAllBlindsList: getAllBlindsList,
  // getAllLocationsList: getAllLocationsList,

}
export default connect(mapStateToProps, mapDispatchToProps)(App);

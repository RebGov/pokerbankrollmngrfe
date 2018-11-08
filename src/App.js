import React, { Component } from 'react';
// import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from  'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import GHistory from './pages/GHistory';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import FormCreateGame from './components/FormCreateGame';
// import FormUpdateGame from './components/FormUpdateGame';
import CurrentGame from './components/CurrentGame';
import Statistics from './pages/Statistics';
import PrivateRoute from './components/PrivateRoute';

// import MenuBar from './components/MenuBar';
import Header from './containers/Header';
// import { getUserData } from './actions/userActions';
// import { getAllBlindsList } from './actions/blindsNameActions';
// import { getAllLocationsList} from './actions/gameLocationActions';
// import { getAllGameNamesList } from './actions/gameNameActions';
// import { getAllNotes } from './actions/noteActions';

// import { getAllBlindsList } from './actions/blindsNameActions';

class App extends Component {
  // componentWillMount(){
  //
  // }
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
      <div className="App">


        <BrowserRouter>
          <div>
          <Header />
          <Switch>
            <Route path="/about" component={AboutPage}/>
            <PrivateRoute path="/:user/history" component={GHistory} />
            <PrivateRoute path="/:user/NewGame"  component={FormCreateGame} />
            <PrivateRoute path="/:user/Statistics" component={Statistics}/>
            <PrivateRoute path="/:user/:game" component={CurrentGame} />
            <Route path="/login" component={SignIn}/>
            <Route path='/createAccount' component={SignUp}/>

            <Route path="/" component={Home}/>
          </Switch>

          </div>
        </BrowserRouter>


      </div>
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

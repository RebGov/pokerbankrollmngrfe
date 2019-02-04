import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, } from  'react-router-dom'
// import SignIn from './components/SignIn';
import LogInPage from './pages/LogInPage';
// import SignUp from './components/SignUp';
import CreateAccountPage from './pages/CreateAccountPage';
import FormUpdateGame from './components/FormUpdateGame';
import GHistory from './pages/GHistory';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import NewGamePage from './pages/NewGamePage';
import Statistics from './pages/Statistics';
import ChartPage from './pages/ChartPage';
import CurrentGame from './components/CurrentGame';
import PrivateRoute from './components/PrivateRoute';
import Header from './containers/Header';

class App extends Component {

  render() {

    // console.log('AppPage : ', this.props.jwt)
    return (
      <div className="App">

        <BrowserRouter>
          <div>
          <Header />
          <Switch>
            <Route path="/about" component={AboutPage}/>
            <PrivateRoute path="/:user/history" component={GHistory} />
            <PrivateRoute path="/:user/NewGame"  component={NewGamePage} />
            <PrivateRoute path="/:user/Statistics" component={Statistics}/>
            <PrivateRoute path="/:user/ChartPage" component={ChartPage} />
            <PrivateRoute path="/:user/:game" component={CurrentGame} />
            <PrivateRoute path="/:user/:game/update" component={FormUpdateGame} />
            <Route path="/login" component={LogInPage}/>
            <Route path='/createAccount' component={CreateAccountPage}/>

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
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);

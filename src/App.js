import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, } from  'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
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
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);
//
// <div>
//   {this.props.isLoggedIn ? ('Is Logged In') : ('Is Logged Out')}
// </div>
// App.propTypes = {
//     isLoggedIn: PropTypes.bool.isRequired
// };

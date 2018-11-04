import React, { Component } from 'react';
// import './App.css';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import AllGames from './AllGames'
// import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
  return this.props.jwt ? <AllGames /> : <SignUp />
}
}

const mapStateToProps = ( state ) => {
  return {
      jwt: state.jwt
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

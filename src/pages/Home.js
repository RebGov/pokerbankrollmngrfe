import React, { Component } from 'react';
// import './App.css';
import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import AllGames from '../components/AllGames'
// import { Link } from 'react-router-dom';
import {getUserData} from '../actions/userActions'

class Home extends Component {
  componentDidMount(){
    if (this.props.jwt){
      this.props.getUserData(this.props.jwt)
    } else {
      console.log("not yet loaded")
    }
  }

  render() {
  // console.log('HomePage: ',this.props.jwt)
  return this.props.jwt ? <AllGames  /> : <SignUp />
}
}

const mapStateToProps = ( state ) => {
  return {
      jwt: state.users.jwt,

  }
}
const mapDispatchToProps = {
  getUserData: getUserData
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

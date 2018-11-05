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
      console.log(this.props.jwt)
      // debugger
      this.props.getUserData(this.props.jwt)
  }
    //debugger
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
// const mapDispatchToProps = ( dispatch ) => {
//   return {
//
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Home);

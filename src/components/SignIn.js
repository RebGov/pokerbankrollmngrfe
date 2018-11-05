import React, { Component } from 'react';
// import { Route } from  'react-router-dom'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect} from 'react-router-dom';
import { loginUser, updateCurrentUser } from '../actions/userActions'

class SignIn extends Component {

  render() {
    // console.log('signInPage: ', this.props, this.props.jwt, this.loginUser)
    if (this.props.jwt) return(
      <Redirect
      to={{
        pathname: "/",
        state: {from: this.props.location}
      }}
      />
    )
    return (
      <div>
        <h1>Sign In</h1>
        <div>
          <label>Email: </label>
          <input onChange={e => this.props.updateCurrentUser({ email: e.target.value })} type="email"/>
        </div>
        <div>
          <label>Password: </label>
          <input onChange={e => this.props.updateCurrentUser({ password: e.target.value })} type="password"/>
        </div>
          <button onClick={this.props.loginUser} >Submit</button>
          <br/>
          <Link to="/createAccount">Create Account</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state)
  return {
    jwt: state.users.jwt
  }
}
const mapDispatchToProps = {
  updateCurrentUser: updateCurrentUser,
  loginUser: loginUser
  // return {
  //   updateCurrentUser(userAttributes){
  //         dispatch({
  //             type: 'UPDATE_CURRENT_USER',
  //             payload: userAttributes
  //         })
  //     },
  //     loginUser(){
  //         dispatch({
  //             type: 'ATTEMPT_TO_LOGIN_USER'
  //         })
  //     }
  // }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

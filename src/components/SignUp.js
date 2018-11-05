import React, { Component } from 'react';
// import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div>
          <label>Email: </label>
          <input onChange={e => this.props.updateCurrentUser({ email: e.target.value })} type="email"/>
        </div>
        <div>
          <label>First Name: </label>
          <input onChange={e => this.props.updateCurrentUser({ firstName: e.target.value })} type="text"/>
        </div>
        <div>
          <label>Last Name: </label>
          <input onChange={e => this.props.updateCurrentUser({ lastName: e.target.value })} type="text"/>
        </div>
        <div>
          <label>Password: </label>
          <input onChange={e => this.props.updateCurrentUser({ password: e.target.value })} type="password"/>
        </div>
          <button onClick={this.props.loginUser} >Submit</button>
          <br/>
          <Link to="/login">Sign In</Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentUser(userAttributes){
          dispatch({
              type: 'UPDATE_CURRENT_USER',
              payload: userAttributes
          })
      },
      createUser(){
          dispatch({
              type: 'CREATE_NEW_USER'
          })
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

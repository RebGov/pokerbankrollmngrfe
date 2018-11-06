import React, { Component } from 'react';
// import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser, updateNewUser } from '../actions/userActions'


class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div>
          <label>Email: </label>
          <input onChange={e => this.props.updateNewUser({ email: e.target.value })} type="email"/>
        </div>
        <div>
          <label>First Name: </label>
          <input onChange={e => this.props.updateNewUser({ first_name: e.target.value })} type="text"/>
        </div>
        <div>
          <label>Last Name: </label>
          <input onChange={e => this.props.updateNewUser({ last_name: e.target.value })} type="text"/>
        </div>
        <div>
          <label>Password: </label>
          <input onChange={e => this.props.updateNewUser({ password: e.target.value })} type="password"/>
        </div>
          <button onClick={this.props.createUser} >Submit</button>
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
const mapDispatchToProps = {
  updateNewUser: updateNewUser,
  createUser: createUser
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateCurrentUser(userAttributes){
//           dispatch({
//               type: 'UPDATE_CURRENT_USER',
//               payload: userAttributes
//           })
//       },
//       createUser(){
//           dispatch({
//               type: 'CREATE_NEW_USER'
//           })
//       }
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

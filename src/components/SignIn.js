import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import { Route } from  'react-router-dom'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect} from 'react-router-dom';
import { loginUser, updateCurrentUser } from '../actions/userActions'

class SignIn extends Component {

  render() {
    const style={
      border: "1px solid purple",
      padding: "1rem",
      margin: "1rem"
    };
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
      <div style={style}>
        <h1>Sign In</h1>
        <div >
          <label>Email: </label>
          <input onChange={e => this.props.updateCurrentUser({ email: e.target.value })} type="email"/>
        </div>
        <div>
          <label>Password: </label>
          <input onChange={e => this.props.updateCurrentUser({ password: e.target.value })} type="password"/>
        </div>
          <Button variant="contained" color="primary" onClick={this.props.loginUser} >Submit</Button>
          <br/>
          <Link to="/createAccount">Create Account</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state)
  return {
    jwt: state.jwt
  }
}
const mapDispatchToProps = {
  updateCurrentUser: updateCurrentUser,
  loginUser: loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

// http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example#webpack-config-js

import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as authActionCreators from "../actions/auth";

class LogoutPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.dispatch(authActionCreators.logout());
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }

}

export default connect()(LogoutPage);

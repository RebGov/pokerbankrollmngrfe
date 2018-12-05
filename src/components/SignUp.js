import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import pokerRedBkrd from '../images/pokerRedBkrd.jpg'
import FilterBox from '../stylesProject/FilterBox';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { createUser, updateNewUser } from '../actions/userActions'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    flexGrow: 5,
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    backgroundImage: `url(${pokerRedBkrd})`,
    backgroundColor: '#BDC3C7',
    minHeight: '125vh',
    minWidth:'100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

  },
  paperStyles:{
    backgroundPosition: 'center',
    textAlign: "center",
    backgroundColor: '#C1ADAB',
    // paddingRight: theme.spacing.unit * 25,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    zIndex: -1,
    maxWidth: '50vh',
    rounded: 'square={false}',
    color: theme.palette.text.secondary,

  },
  grow: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
class SignUp extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div >
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
          <Button variant="contained" color="primary" onClick={this.props.createUser} >Submit</Button>
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
SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  compose(
  withStyles(styles, {
    name: 'SignUp',
  }),
  connect(mapStateToProps, mapDispatchToProps))(SignUp);

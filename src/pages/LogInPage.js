import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import pokerRedBkrd from '../images/pokerRedBkrd.jpg'
import FilterBox from '../stylesProject/FilterBox';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SignIn from '../components/SignIn'

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
    marginLeft: "20vh",
    // paddingRight: theme.spacing.unit * 25,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    zIndex: -1,
    maxWidth: '150vh',
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

class LogInPage extends Component {
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
      <Paper className={classes.paperStyles} elevation={1}>
        
        <SignIn />
      </Paper>
      </div>

    )
  }
}
const mapStateToProps = ( state ) => {


  return {


    currentUser: state.currentUser


  }
}
const mapDispatchToProps = {


}
LogInPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default  compose(
  withStyles(styles, {
    name: 'LogInPage',
  }),
  connect(mapStateToProps, mapDispatchToProps))(withRouter(LogInPage));

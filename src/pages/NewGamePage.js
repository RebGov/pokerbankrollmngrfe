import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import pokerRedBkrd from '../images/pokerRedBkrd.jpg';
import FormCreateGame from '../components/FormCreateGame';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    flexGrow: 5,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundImage: `url(${pokerRedBkrd})`,
    backgroundColor: '#BDC3C7',
    minHeight: '120vh',
    minWidth:'100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    backgroundSize: 'cover',
    // opacity: 0.8
    // textAlign: "center",

  },
  paperStyles:{
    textAlign: "center",
    marginLeft: "20vh",
    backgroundColor: '#C1ADAB',
    backgroundPosition: 'center',
    maxWidth: '30vh',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    zIndex: -1,
  },
  grow: {
    flexGrow: 1,
  },


});

class NewGamePage extends Component {
  render(){
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paperStyles} elevation={1}>
          <FormCreateGame />
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
NewGamePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  compose(
  withStyles(styles, {
    name: 'NewGamePage',
  }),
  connect(mapStateToProps, mapDispatchToProps))(withRouter(NewGamePage));

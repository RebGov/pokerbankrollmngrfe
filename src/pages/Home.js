import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import pokerRedBkrd from '../images/pokerRedBkrd.jpg'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    flexGrow: 5,
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 2,
    backgroundImage: `url(${pokerRedBkrd})`,
    minHeight: '125vh',
    minWidth:'100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // opacity: 0.8
    // textAlign: "center",

  },
  paperStyles:{
    textAlign: "center",
    backgroundColor: '#C1ADAB',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    zIndex: -1,
  },
  grow: {
    flexGrow: 1,
  },


});

class Home extends Component {
  render() {
    const { classes } = this.props;
    // const style={
    //   // border: "1px solid teal",
    //   padding: "1rem",
    //   margin: "1rem"
    // };
  // console.log('HomePage: ',this.props.currentUser.id)
  return (


    <div className={classes.root} >
    <Paper className={classes.paperStyles} elevation={1}>
      <Typography style={{color:'#C41B0D'}} variant="h5" component="h3">
      <div>
        <h1 style={{color: '#927E7C'}}>Welcome to Ante Up Poker Bankroll Suite</h1>
        <h4>Strategize your poker play based on your played game session history.</h4>
        <p>Enter your buy in and cash out information.</p>
      </div>

      </Typography>

    </Paper>
  </div>



    )
  }
}

const mapStateToProps = ( state ) => {
  return {
      jwt: state.jwt,
      currentUser: state.currentUser.id
  }
}
const mapDispatchToProps = {

}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  compose(
  withStyles(styles, {
    name: 'Home',
  }),
  connect(mapStateToProps, mapDispatchToProps))(Home);
// export default connect(mapStateToProps, mapDispatchToProps)(Home);

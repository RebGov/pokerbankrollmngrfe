import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import pokerRedBkrd from '../images/pokerRedBkrd.jpg'
import FilterBox from '../stylesProject/FilterBox';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Line} from 'react-chartjs-2';
// import {markPlayedGamesReversed} from '../actions/userActions';



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




class ChartPage extends Component {
  // fixed issue of chart constantly refreshing and flipping dates by adding a .slice() to line 66 and a .slice().reverse() to line 82.
  profitForChart = (props) => {
    console.log("profitFnc:", this.props.playedGames)
    let total = 0
    return this.props.playedGames.slice().reverse().map( (game, index) => ({
      x: index,
      y: total += parseFloat(game.profit)
    }))
  }


  render() {

    if(!this.props.playedGames) return <h1>Loading...</h1>
    const { classes } = this.props;
    const data = {
      datasets: [{
        data: this.profitForChart(),
        label: 'PROFIT $'
    }],
    labels: this.props.playedGames.slice().reverse().map( game => (new Date(game.start_date_time)).toLocaleDateString()),
  }
    if(this.props.playedGames == 0 || this.props.playedGames == undefined){
      return (
        <div className={classes.root}>
        <Paper className={classes.paperStyles} elevation={1}>
          <Typography variant="h5" component="h5">No Played Game Session History for Cumulative Chart</Typography>
          <FilterBox />
          <Typography component="p">
            Please select different filters or
          </Typography>
          <Link style={{textDecoration:" none"}} to={{pathname: `/${localStorage.user_id}/NewGame`}}>
            <Button>
              select to enter a new game session.
            </Button>
            </Link>
        </Paper>
        </div>
      )
    } else {
      return(
      <div className={classes.root}>

        <Paper className={classes.paperStyles} elevation={1}>
          <Typography variant="h4" component="h2">
            Played Game Sessions Cumulative Chart
            <hr/>
            <Typography variant="h5" component="h5">
              Please Select Filters for Chart:
            </Typography>
            <Typography component="p">
              If filters not selected, statitics will display for all played sessions. Please note: Filters selected and not cleared out under History or Statistics will remain in effect.
            </Typography>
            <FilterBox />

            <br/>
            <Line data={data} />
          </Typography>

        </Paper>
      </div>
    )
  }
  }
}
const mapStateToProps = ( state ) => {
  return {
    playedGames: state.userPlayedGames.playedGames,
    isLoading: state.isLoading,
  }
}
const mapDispatchToProps = {


}
ChartPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  compose(
  withStyles(styles, {
    name: 'ChartPage',
  }),
  connect(mapStateToProps, mapDispatchToProps))(withRouter(ChartPage));

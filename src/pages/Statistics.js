import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import pokerRedBkrd from '../images/pokerRedBkrd.jpg'
import FilterBox from '../stylesProject/FilterBox';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Doughnut} from 'react-chartjs-2';

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

class Statistics extends Component {

  totalTime = () => {
    let total = 0
    total = this.props.playedGames.reduce( (prev, cur) => prev + parseInt(cur.minutes),0)
    return total

  }

  converToHoursAndMintues = (totalTime) => {
    let hours= this.totalTime() / 60
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + " hour(s) and " + rminutes + " minute(s)."
  }

  totalProfit = () => {
    let total =0
    total = this.props.playedGames.reduce( (prev, cur)=> prev + parseInt(cur.profit), 0)
    return total.toFixed(2)
  }
  totalGames = () => {
    return Object.keys(this.props.playedGames).length
  }
  numGamesWon = () => {
    let wonCount = 0
    this.props.playedGames.map(game => {
      if (game.won_game === true){
        wonCount += 1
      }
    })
    return wonCount
  }
  numGamesLost = (numGamesWon, totalGames) => {
    let gamesLost = this.totalGames() - this.numGamesWon()
    return gamesLost
  }
  totalWon = () => {
    let amountWon = 0
    this.props.playedGames.map(game => {
      if (game.won_game === true) {
        amountWon += parseInt(game.profit)
      }
    })
    return amountWon.toFixed(2)
  }
  totalLost = () => {
    let amountLost = 0
    this.props.playedGames.map(game => {
      if (game.won_game === false) {
        amountLost += parseInt(game.profit)
      }
    })
    return amountLost.toFixed(2)
  }

  averageWin =(totalWon, numGamesWon) => {
    let average = this.totalWon()/this.numGamesWon()
    return average.toFixed(2)
  }
  averageLoss = (totalLost, numGamesLost) => {
    let average = this.totalLost()/this.numGamesLost()
    return average.toFixed(2)
  }
  percentOfWins = (totalGames, numGamesWon) => {
    let percentageWins = (this.numGamesWon() * 100)/this.totalGames()
    return percentageWins.toFixed(2)
  }
  percentOfLosses = (totalGames, numGamesLost) => {
    let percentageWins = (this.numGamesLost() * 100)/this.totalGames()
    return percentageWins.toFixed(2)
  }
  dollarPerHour = (totalProfit, totalTime) => {
    let dollarPerHr = (this.totalProfit()/this.totalTime())*60
    return dollarPerHr.toFixed(2)
  }

  render(){

    if(!this.props.playedGames) return <h1>Loading...</h1>
      const { classes } = this.props;
      const data = {
        datasets: [{
          data: [this.numGamesWon(), this.numGamesLost()],
          backgroundColor: [ '#9ECF98', '#CD474A']
      }],
      labels: [
          'Wins',
          'Losses'    ],
      }

    return ((this.props.playedGames == 0 || this.props.playedGames == undefined) ?  (
      <div className={classes.root}>
      <Paper className={classes.paperStyles} elevation={1}>
        <Typography variant="h5" component="h5">No Statistics to Show</Typography>
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
    ): (
      <div className={classes.root}>

        <Paper className={classes.paperStyles} elevation={1}>
          <Typography variant="h4" component="h2">
            Ante Up Statistics:
          </Typography>
          <Typography variant="h5" component="h5">
          Please Select Filters for Played Session Statistics:
          </Typography>
          <Typography component="p">
          If filters not selected, statitics will display for all played sessions. Please note: Filters selected and not cleared out under History or Charts will remain in effect.
          </Typography>
          <FilterBox />
        </Paper>


        <Paper className={classes.paperStyles} elevation={2}>
          <Typography variant="h5" component="h5">
            Total:
          </Typography>
          <Typography component="li">
            Total Time Played: {this.converToHoursAndMintues()}
          </Typography>
          <Typography component="li">
            Total Profit: $ {this.totalProfit()}
          </Typography>
          <Typography component="li">
            Games Played: {this.totalGames()}
          </Typography>
          <Typography component="li">
            $ {this.dollarPerHour()} per Hour
          </Typography>
            <Doughnut data={data}/ >
        </Paper>

        <Paper className={classes.paperStyles} elevation={3}>
          <Typography variant="h5" component="h5">
            Won Games:
          </Typography>
          <Typography component="li">
            Total Won: $ {this.totalWon()}
          </Typography>
          <Typography component="li">
            Number of Games Won: {this.numGamesWon()}
          </Typography>
          <Typography component="li">
            Percentage Wins: {this.percentOfWins()}%
          </Typography>
          <Typography component="li">
            Average Win: $ {this.averageWin()}
          </Typography>
        </Paper>
        <Paper className={classes.paperStyles} elevation={3}>
          <Typography variant="h5" component="h5">
            Lost Games:
          </Typography>
          <Typography component="li">
            Total Lost: $ {this.totalLost()}
          </Typography>
          <Typography component="li">
            Number of Games Lost: {this.numGamesLost()}
          </Typography>
          <Typography component="li">
            Percentage Losses: {this.percentOfLosses()}%
          </Typography>
          <Typography component="li">
            Average Loss: ${this.averageLoss()}
          </Typography>
        </Paper>

      </div>
    ))
  }

}
const mapStateToProps = ( state ) => {
  return {
    playedGames: state.userPlayedGames.playedGames,
    isLoading: state.isLoading
  }
}
const mapDispatchToProps = {
  // getProfit: getProfit


}
Statistics.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  compose(
  withStyles(styles, {
    name: 'Statistics',
  }),
  connect(mapStateToProps, mapDispatchToProps))(Statistics);

// export default connect(mapStateToProps, mapDispatchToProps)(Statistics);

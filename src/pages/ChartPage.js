import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import pokerRedBkrd from '../images/pokerRedBkrd.jpg'
import FilterBox from '../stylesProject/FilterBox';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Line} from 'react-chartjs-2';



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
  profitForChart = () => {
    console.log("profitFnc:", this.props.playedGames)
    let total = 0
    return this.props.playedGames.reverse().map( (game, index) => ({
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
        label: 'Profit'
    }],
    labels: this.props.playedGames.map( game => (new Date(game.start_date_time)).toLocaleDateString()),
  }

    return(
      <div className={classes.root}>

        <Paper className={classes.paperStyles} elevation={1}>
          <Typography variant="h4" component="h2">
            Played Game Chart
            <br/>
            <FilterBox />
            <br/>
            <Line data={data} />
          </Typography>

        </Paper>
      </div>
    )
  }
}
const mapStateToProps = ( state ) => {
  return {
    playedGames: state.userPlayedGames.playedGames,
     isLoading: state.isLoading
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

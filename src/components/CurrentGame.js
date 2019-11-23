import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'
import Button from '@material-ui/core/Button';
import pokerRedBkrd from '../images/pokerRedBkrd.jpg'
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import editForm from '../actions/userActions';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    flexGrow: 5,
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    minHeight: '125vh',
    minWidth:'100vh',
    backgroundImage: `url(${pokerRedBkrd})`,
    backgroundColor: "#050000",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

  },
  paperStyles:{
    marginLeft: "40vh",
    paddingLeft: theme.spacing.unit *4,
    paddingRight:theme.spacing.unit*4,
    backgroundPosition: 'center',
    textAlign: "center",
    backgroundColor: '#C1ADAB',
    flexGrow:5,
    // paddingRight: theme.spacing.unit * 25,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    zIndex: -1,
    maxWidth: '100vh',
    rounded: 'square={false}',

  },
  grow: {
    flexGrow: 1,
  },
});

class CurrentGame extends Component {
  converToHoursAndMintues = (incomingTime) => {

    if (incomingTime >= 60){
      let hours = incomingTime / 60
      let rhours = Math.floor(hours);
      let minutes = (hours - rhours) * 60;
      let rminutes = Math.round(minutes);
      if (rminutes >=0 && rminutes <=10){
        return rhours + "h:0" + rminutes +"m"
      }
      return rhours + "h:" + rminutes +"m"
    } else {
      if (incomingTime >=0 && incomingTime<=10) {
        return "00h:0" + incomingTime + "m"
      }
        return "00h:"+ incomingTime+"m"
      }
  }

  render(){
    const { classes } = this.props;
    let startDate = new Date(this.props.game.start_date_time)
    let endDate = new Date(this.props.game.end_date_time)

    return (

          <div className={classes.root}>
          <Paper className={classes.paperStyles} elevation={1}>
            <Typography variant="h5" component="h5">
              Selected Played Game Session:
            </Typography>
            <hr/>
            <h4>Poker Room: {this.props.game.game_location.poker_room
            }</h4>
            <h4>Game: {this.props.game.game_name.game_title} | Blinds: {this.props.game.blinds_name.blinds} | Kill: {this.props.game.kill_status.kill}</h4>
            <h4>Start Date & Time: {startDate.toLocaleString()}</h4>
            <h4>End Date & Time {endDate.toLocaleString()}</h4>
            <h4>Play Duration: {this.converToHoursAndMintues(this. props.game.minutes)}</h4>
            <h4>Buy In: ${this.props.game.buy_in} | Cash Out: ${this.props.game.cash_out} </h4>
            <h4>{this.props.game.won_game === true ? (<b style={{color:"green"}}>${this.props.game.profit}</b>) : (<b style={{color :"red"}}>${this.props.game.profit}</b>) } </h4>
            <br/>

            <Button className={classes.button} variant="contained" color="primary">Edit</Button>
            <hr/>
        </Paper>
      </div>
    )
  }

}
const mapStateToProps = ( state ) => {
  return {
    game: state.selectedGame.playedGame

  }
}
const mapDispatchToProps = {
// editForm: editForm


}

CurrentGame.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default  compose(
  withStyles(styles, {
    name: 'CurrentGame',
  }),
  connect(mapStateToProps, mapDispatchToProps))(withRouter(CurrentGame));

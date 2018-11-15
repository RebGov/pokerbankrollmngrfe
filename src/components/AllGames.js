import React, { Component } from 'react';
import {withRouter} from 'react-router'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions';
import { selectOneGame } from '../actions/userActions'

class AllGames extends Component {
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
        return "00h:0" + incomingTime +"m"
      }
        return "00:"+ incomingTime+"m"
      }
  }
  render() {


    return ((this.props.playedGames === undefined || this.props.playedGames ==0) ?  (
      <div >
      <h1>No History to Show</h1>
      </div>
    ): (
      <div >
        <hr/>
        {this.props.playedGames.map( (game,index) => (
          <div key={game.id} onClick={e => this.props.selectOneGame(game.id, this.props.history)}>
            # {index+1} | Poker Room: {game.game_location.poker_room} | Game: {game.game_name.game_title} | Blinds: {game.blinds_name.blinds} {game.kill_status.kill === "none"? (<b>|</b>):(<em>| KillPot: {game.kill_status.kill} | </em>)} {game.tournament === false ? (<em>Cash Game</em>) : (<em>Tournament</em>)}
            <br/>
              Start Date & Time: {game.start_date_time} - End Date & Time: {game.end_date_time} |  {this.converToHoursAndMintues(game.minutes)}
              <br/>
              Buy In: ${game.buy_in} | Cash Out: ${game.cash_out} | {game.won_game === true ? (<b style={{color:"green"}}>${game.profit}</b>) : (<b style={{color :"red"}}>${game.profit}</b>) }
            <hr/>
          </div>
            ))}
      </div>
    ))
  }
}

function mapStateToProps(state)  {
    return {
      currentUser: state.currentUser,
      playedGames: state.userPlayedGames.playedGames
    }
}

const mapDispatchToProps = {
  logoutUser: logoutUser,
  selectOneGame: selectOneGame

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AllGames));

// array.sort(function(a, b) {
//     a = new Date(a.dateModified);
//     b = new Date(b.dateModified);
//     return a>b ? -1 : a<b ? 1 : 0;
// });
// Notes:
// <ul>
//   {game.notes.map(note => (
//     <li key={note.id}>{note.updated_at} - {note.note}</li>
//   ))}
// </ul>

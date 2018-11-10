import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions'

class AllGames extends Component {
  render() {


    const style={
      border: "1px solid orange",
      padding: "1rem",
      margin: "1rem"
    };
    return this.props.playedGames === null ?  (
      <div style={style}>
        <h1>Welcome </h1>
        <br/>
        <Button variant="contained" color="primary" onClick={this.props.logoutUser}>Log Out</Button>
      </div>

    ): (
      <div style={style}>
        <h1>Welcome {this.props.currentUser.first_name}: </h1>

        {this.props.playedGames.map( (game,i) => (
          <div key={game.id}>
            Game: {i+1} | {game.game_location.poker_room} | Game: {game.game_name.game_title.toUpperCase()} | Blinds: {game.blinds_name.blinds} | {game.tournament === false ? (<b>Cash Game</b>) : (<b>Tournament</b>)}
            <br/>
              Start Date & Time: {game.start_date_time} - End Date & Time: {game.end_date_time} | Length of Play: {game.minutes / 60} hours
              <br/>
              Buy In: ${game.buy_in} | Cash Out: ${game.cash_out} | {game.won_game === true ? (<b style={{color:"green"}}>${game.profit}</b>) : (<b style={{color :"red"}}>${game.profit}</b>) }
              <br/>
              Notes:
              <ul>
                {game.notes.map(note => (
                  <li key={note.id}>{note.updated_at} - {note.note}</li>
                ))}
              </ul>
              <hr/>
          </div>
            ))}
      </div>
    )
  }
}

function mapStateToProps(state)  {
    return {
      currentUser: state.currentUser,
      playedGames: state.currentUser.played_games
    }
}

const mapDispatchToProps = {
  logoutUser: logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(AllGames);

// array.sort(function(a, b) {
//     a = new Date(a.dateModified);
//     b = new Date(b.dateModified);
//     return a>b ? -1 : a<b ? 1 : 0;
// });

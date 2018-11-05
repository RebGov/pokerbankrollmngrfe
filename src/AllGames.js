import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class AllGames extends Component {
  render() {
    console.log("AllGames: ", this.props.playedGames)
    return (
      <div>
        <h1>Welcome {this.props.currentUser.first_name}: </h1>
        <ul>
        {this.props.playedGames.map( game => (
          <div key={game.id}>
            <li>Game:{game.id}, {game.game_location.place}, Game: {game.game_name.game_title}, Blinds: {game.blinds_name.blinds} </li>
            <ul>
              <li>Start Date/Time: {game.start_date_time}</li>
              <li>End Date/Time: {game.end_date_time}</li>
              {game.tournament === false ? (<li>Cash Game</li>) : (<li>Tournament</li>)}
              <li>Buy In: ${game.buy_in}</li>
              <li>Cash Out: ${game.cash_out}</li>
              {game.won_game === true? (<li>Won Game: True</li>) : (<li>Won Game: False</li>) }
              <li>Length of Play: {game.minutes} minutes</li>
              {game.tournament === false ? (<li>Cash Game</li>) : (<li>Tournament</li>)}
              <li>Notes: </li>
              <ul>
                {game.notes.map(note => (
                  <li key={note.id}>{note.updated_at} - {note.note}</li>
                ))}
              </ul>
            </ul>
          </div>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
    return {
      currentUser: state.users.currentUser,
      playedGames: state.users.currentUser.played_games
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllGames);

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions'

class AllGames extends Component {
  render() {
    return this.props.playedGames === null ?  (
      <div>
        <h1>Welcome {this.props.currentUser.first_name}</h1>
        <br/>
        <button onClick={this.props.logoutUser}>Log Out</button>
      </div>

    ): (
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
        <button onClick={this.props.logoutUser}>Log Out</button>
      </div>
    )
  }
}

function mapStateToProps(state)  {
    return {
      currentUser: state.users.currentUser,
      playedGames: state.users.currentUser.played_games
    }
}

const mapDispatchToProps = {
  logoutUser: logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(AllGames);

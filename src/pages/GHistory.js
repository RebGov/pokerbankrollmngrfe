import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllGames from '../components/AllGames'
import { Link } from 'react-router-dom';

// import SetGameLocationSearch from '../stylesProject/SetGameLocationSearch';
// import SetGameNameSearch from '../stylesProject/SetGameNameSearch';
// import SetGameBlindsNameSearch from '../stylesProject/SetGameBlindsNameSearch';
// import SetKillStatusSearch from '../stylesProject/SetKillStatusSearch';
// import GameTable from '../stylesProject/GameTable'
import FilterBox from '../stylesProject/FilterBox';
import { setGameLocationSearch } from '../actions/gameLocationActions'
import { setGameNameSearch } from '../actions/gameNameActions';
import { setBlindsNameSearch } from '../actions/blindsNameActions';



class GHistory extends Component {

  render(){

    const style={
      border: "1px solid teal",
      padding: "1rem",
      margin: "1rem"
    };

    return this.props.playedGames === undefined || this.props.playedGames === 0 ?  (<div style={style} className="noHistory" > <h1>Your Personal History at Ante Up Poker Bankroll Suite: </h1><Link to={{pathname: `/${localStorage.user_id}/NewGame`}}><h2>Please Enter A Game Session.</h2></Link> </div> ):
    (
      <div style={style} className="history">
      <h1>{this.props.currentUser.first_name}'s Ante Up Played Sessions History:</h1>
        <div>
          <h2>Please Select Filters for Played Sessions History:</h2>
          <FilterBox />
          <h5>If no filters selected, entire history will display.</h5>
        </div>
          <AllGames />

      </div>
    )
  }

}
const mapStateToProps = ( state ) => {


  return {
    // /allGameLocations: state.allGameLocations,
    // allBlindsNames: state.allBlindsNames,
    // allGameNames: state.allGameNames,
    // gameFilters: state.gameFilters,
    playedGames: state.userPlayedGames,
    currentUser: state.currentUser


  }
}
const mapDispatchToProps = {



}

export default connect(mapStateToProps, mapDispatchToProps)(GHistory);
// <AllGames />
// <GameTable />
// <SetGameLocationSearch />
// <SetGameNameSearch />
// <SetGameBlindsNameSearch />
// <SetKillStatusSearch />

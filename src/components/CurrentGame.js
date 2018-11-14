import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'


class CurrentGame extends Component {
  render(){
    console.log('currentGame:', this.props.selectedGame)
    console.log("State", this.props.selectedGameEmpty)

    return ((this.props.selectedGameEmpty) ? (null):(

          <div>
          <h1>Played Session:</h1>
        <h4>{this.props.selectedGame.id}</h4>
      </div>
    ))
  }

}
const mapStateToProps = ( state ) => {
  return {
    selectedGame: state.selectedGame.playedGame
  }
}
const mapDispatchToProps = {


}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CurrentGame));

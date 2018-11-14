import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentGame extends Component {
  render(){
    console.log('currentGame:', this.props.selectedGame)
    const style={
      // border: "1px solid teal",
      padding: "1rem",
      margin: "1rem"
    };
    return (
      <div style={style}>
      <h1>Played Session:</h1>
      <h4>{this.props.selectedGame.id}</h4>
      </div>
    )
  }

}
const mapStateToProps = ( state ) => {
  return {
    selectedGame: state.selectedGame.playedGame
  }
}
const mapDispatchToProps = {


}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentGame);

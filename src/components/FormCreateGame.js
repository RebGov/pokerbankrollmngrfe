import React, { Component } from 'react';
import { connect } from 'react-redux';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import StartDateTime from '../stylesProject/StartDateTime';
import EndDateTime from '../stylesProject/EndDateTime';
import SelectGameLocation from '../stylesProject/SelectGameLocation'
import SelectGameBlindsName from '../stylesProject/SelectGameBlindsName'
import SelectGameName from '../stylesProject/SelectGameName'
import {updateNewGame, createNewGame } from '../actions/userActions'




class FormCreateGame extends Component {

  render(){
    const style={
      border: "1px solid green",
      padding: "1rem",
      margin: "1rem"
    };

    return (
      <div style={style}>
      <h4>Hello Create Played Game Form</h4>
        <form key={this.props.currentUser.id} onSubmit={this.handleSubmit}>

          <SelectGameLocation />
        <br />
          <SelectGameName />
        <br/>
          <SelectGameBlindsName />
        <br/>
        <div >
          <label>Buy in: $ </label>
          <input onChange={e=>this.props.updateNewGame({buy_in: e.target.value })} type="integer"/>
        </div>
        <br/>
        <div>
        <StartDateTime updateNewGame={this.props.updateNewGame} value={this.props.newUserGame.start_date_time}/>
        </div>
        <br/>
        <div >
          <label>Cash out: $ </label>
          <input onChange={e=>this.props.updateNewGame({cash_out: e.target.value})} type="integer"/>
        </div>
        <br/>
        <div>
        <EndDateTime updateNewGame={this.props.updateNewGame} value={this.props.newUserGame.end_date_time} />
        </div>
        <br/>
        </form>
        <Button variant="contained" color="primary" onClick={this.props.createNewGame} >Submit New Game</Button>

      </div>
    )
  }

}
const mapStateToProps = ( state ) => {
  return {
    currentUser: state.currentUser,
    jwt: state.jwt,
    newUserGame: state.newUserGame
  }
}
const mapDispatchToProps = {

  updateNewGame: updateNewGame,
  createNewGame: createNewGame

}

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateGame);

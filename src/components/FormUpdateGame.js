import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
//import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import pokerRedBkrd from '../images/pokerRedBkrd.jpg';
import Button from '@material-ui/core/Button';
import StartDateTime from '../stylesProject/StartDateTime';
import EndDateTime from '../stylesProject/EndDateTime';
import SelectGameLocation from '../stylesProject/SelectGameLocation';
import SelectGameBlindsName from '../stylesProject/SelectGameBlindsName';
import SelectGameName from '../stylesProject/SelectGameName';
import SelectKillStatus from '../stylesProject/SelectKillStatus';
import {updateNewGame, createNewGame } from '../actions/userActions';

class FormUpdateGame extends Component {
  render(){
    const style={
      border: "1px solid blue",
      padding: "1rem",
      margin: "1rem"
    };
    return (
      <div style={style}>
      <h4>Hello Update Played Game Form</h4>

              <form onSubmit={this.handleSubmit}>
              <div>
                <label> Select Location: </label>
                <select value={console.log('value')} onChange={console.log("handleChange")}>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="Location">Location</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
              <br />
              <div>
                <label> Select Game: </label>
                <select value={console.log('value')} onChange={console.log("handleChange")}>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="Game">Game</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
              <br/>
              <div className="blinds_selector">
              <label> Select Blinds: </label>
                <select style={{color: 'primary'}} value={console.log('value')} onChange={console.log("handleChange")}>
                  <option value="Opt1">Opt1</option>
                  <option value="lime">Lime</option>
                  <option  selected value="Blinds">Blinds</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
              <br/>
              <div >
                <label>Buy in: $ </label>
                <input  type="integer"/>
              </div>
              <br/>
              <div>
              <StartDateTime />
              </div>
              <br/>
              <div >
                <label>Cash out: $ </label>
                <input  type="integer"/>
              </div>
              <br/>
              <div>
              <EndDateTime />
              </div>
              <br/>
              </form>
              <Button variant="contained" color="primary" onClick={console.log('submit form')} >Update Game</Button>


      </div>
    )
  }

}
const mapStateToProps = ( state ) => {
  return {

  }
}
const mapDispatchToProps = {


}

export default connect(mapStateToProps, mapDispatchToProps)(FormUpdateGame);

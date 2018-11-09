import React, { Component } from 'react';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
//import Input from '@material-ui/core/Input';
//import OutlinedInput from '@material-ui/core/OutlinedInput';
//import FilledInput from '@material-ui/core/FilledInput';
//import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
//import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { selectGameName } from '../actions/gameNameActions'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
})

class SelectGameName extends Component {
  render(){
    const selections = this.props.allGameNames || {}
    console.log("select game Name", selections)
    return (
  <div>
    <label> Select Game: </label>
    <Select className="selectGameName" onChange={e => this.props.selectGameName({ id: e.target.value })}>
    <MenuItem value="" disabled selected>Select Game</MenuItem>
      {selections.map(gameName => (
        <MenuItem key={gameName.id} value={gameName.id}>{gameName.game_title.toUpperCase()}</MenuItem>
      ))}
      </Select>
      <button onClick={console.log("clicked + button") }> + </button>
    </div>

)}
}

function mapStateToProps(state)  {
    return {
      allGameNames: state.allGameNames

    }
}

const mapDispatchToProps = {
  selectGameName: selectGameName
}

export default  compose(
  withStyles(styles, {
    name: 'SelectGameName',
  }),
  connect(mapStateToProps, mapDispatchToProps))(SelectGameName);

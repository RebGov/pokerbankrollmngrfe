import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { selectGameLocation } from '../actions/gameLocationActions'

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

class SelectGameLocation extends Component {


  render(){
    let selections = this.props.allGameLocations || []
    console.log("select game Location", selections)
    return (
      <div>

        <label> Select Location: </label>
          <Select className="selectLoction" value={this.props.newUserGame.game_location_id} onChange={e => this.props.selectGameLocation({ id: e.target.value })}>
            <MenuItem value="" disabled selected>Select Location</MenuItem>
            {selections.map(location => (
            <MenuItem key={location.id} value={location.id}>{location.place}</MenuItem>
            ))}
          </Select>
          <button onClick={console.log("clicked + button") }> + </button>

      </div>
    )
  }
}

function mapStateToProps(state)  {
  return {
    allGameLocations: state.allGameLocations,
    newUserGame: state.newUserGame

  }
}

const mapDispatchToProps = {
  selectGameLocation: selectGameLocation
}

export default  compose(
  withStyles(styles, {
    name: 'SelectGameLocation',
  }),
  connect(mapStateToProps, mapDispatchToProps))(SelectGameLocation);

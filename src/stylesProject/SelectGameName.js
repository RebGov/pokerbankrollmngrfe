import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

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
    const { classes } = this.props;
    const selections = this.props.allGameNames || []
    return (
  <div>
  <FormControl required className={classes.formControl}>
    <InputLabel htmlFor="gametype-required">Game Type: </InputLabel>
    <Select
      id="standard-required"
      className="selectGameName"
      value={this.props.newUserGame.game_name_id}
      onChange={e => this.props.selectGameName({ id: e.target.value})}
      name="Game"
      inputProps={{
        id: 'gametype-required',
      }}
      className={classes.selectEmpty}
    >
    <MenuItem value="" disabled selected>Select Game</MenuItem>
      {selections.map(gameName => (
        <MenuItem key={gameName.id} value={gameName.id}>{gameName.game_title.toUpperCase()}</MenuItem>
      ))}
      </Select>
      <FormHelperText>Required</FormHelperText>
      </FormControl>

    </div>

)}
}

function mapStateToProps(state)  {
    return {
      allGameNames: state.allGameNames,
      newUserGame: state.newUserGame
    }
}

const mapDispatchToProps = {
  selectGameName: selectGameName
}
SelectGameName.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  compose(
  withStyles(styles, {
    name: 'SelectGameName',
  }),
  connect(mapStateToProps, mapDispatchToProps))(SelectGameName);

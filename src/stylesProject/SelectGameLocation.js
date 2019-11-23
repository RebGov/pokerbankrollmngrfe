import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
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
    const { classes } = this.props;
    let selections = this.props.allGameLocations || []
    return (
      <div>

        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="location-required">Location: </InputLabel>
          <Select
            id="standard-required"
            className="selectLoction"
            value={this.props.newUserGame.game_location_id}
            onChange={e => this.props.selectGameLocation({ id: e.target.value })}
            name="Location"
            inputProps={{
              id: 'location-required',
            }}
            className3={classes.selectEmpty}
          >
          <MenuItem value="" disabled selected>Select Location</MenuItem>
          {selections.map(location => (
          <MenuItem key={location.id} value={location.id}>{location.poker_room.toUpperCase()}</MenuItem>
          ))}
        </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

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
SelectGameLocation.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default  compose(
  withStyles(styles, {
    name: 'SelectGameLocation',
  }),
  connect(mapStateToProps, mapDispatchToProps))(SelectGameLocation);

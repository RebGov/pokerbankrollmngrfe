import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { setGameLocationSearch } from '../actions/gameLocationActions'

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

class SetGameLocationSearch extends Component {



  render(){
    let selections = this.props.allGameLocations || []

    return (
      <div>

        <label> Select Location: </label>
          <Select
          className="filterByLocation" value={this.props.gameFilters.game_location_id}
          onChange={e => this.props.setGameLocationSearch({ id: e.target.value })}
          >
            <MenuItem value="" >None</MenuItem>
            {selections.map(location => (
            <MenuItem key={location.id} value={location.id}>{location.poker_room.toUpperCase()}</MenuItem>
            ))}
          </Select>

      </div>
    )
  }
}

function mapStateToProps(state)  {
  return {
    allGameLocations: state.allGameLocations,
    gameFilters: state.gameFilters

  }
}

const mapDispatchToProps = {

  setGameLocationSearch: setGameLocationSearch

}

export default  compose(
  withStyles(styles, {
    name: 'SetGameLocationSearch',
  }),
  connect(mapStateToProps, mapDispatchToProps))(SetGameLocationSearch);

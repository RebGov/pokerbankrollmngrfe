import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { setGameNameSearch } from '../actions/gameNameActions'

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

class SetGameNameSearch extends Component {
  render(){
    let selections = this.props.allGameNames || []
    return (
      <div>
        <label> Select Game: </label>
          <Select
          className="filterByGameName" value={this.props.gameFilters.game_name_id}
          onChange={e => this.props.setGameNameSearch({ id: e.target.value })}
          >
          <MenuItem value="" >None</MenuItem>
            {selections.map(gameName => (
              <MenuItem key={gameName.id} value={gameName.id}>{gameName.game_title.toUpperCase()}</MenuItem>
            ))}
            </Select>
      
      </div>
    )
  }
}

function mapStateToProps(state)  {
  return {
    allGameNames: state.allGameNames,
    gameFilters: state.gameFilters

  }
}

const mapDispatchToProps = {

  setGameNameSearch: setGameNameSearch

}

export default  compose(
  withStyles(styles, {
    name: 'SetGameNameSearch',
  }),
  connect(mapStateToProps, mapDispatchToProps))(SetGameNameSearch);

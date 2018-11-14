import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { setKillStatusSearch } from '../actions/killStatusActions'

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

class SetKillStatusSearch extends Component {


  render(){
    let selections = this.props.allKillStatuses || []
    return (
      <div>

        <label> Select Kill: </label>
          <Select className="selectKill" value={this.props.gameFilters.kill_status_id} onChange={e => this.props.setKillStatusSearch({ id: e.target.value })}>
            <MenuItem value="">All Types</MenuItem>
            {selections.map(killStatus => (
            <MenuItem key={killStatus.id} value={killStatus.id}>{killStatus.kill}</MenuItem>
            ))}
          </Select>


      </div>
    )
  }
}

function mapStateToProps(state)  {
  return {
    allKillStatuses: state.allKillStatuses,
    gameFilters: state.gameFilters

  }
}

const mapDispatchToProps = {
  setKillStatusSearch: setKillStatusSearch
}

export default  compose(
  withStyles(styles, {
    name: 'SetKillStatusSearch',
  }),
  connect(mapStateToProps, mapDispatchToProps))(SetKillStatusSearch);

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
import { selectKillStatus } from '../actions/killStatusActions'

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

class SelectKillStatus extends Component {


  render(){
    let selections = this.props.allKillStatuses || []
    return (
      <div>

        <label> Select Kill: </label>
          <Select className="selectKill" value={this.props.newUserGame.kill_status_id} onChange={e => this.props.selectKillStatus({ id: e.target.value })}>
            <MenuItem value="" disabled selected>Select Kill</MenuItem>
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
    newUserGame: state.newUserGame

  }
}

const mapDispatchToProps = {
  selectKillStatus: selectKillStatus
}

export default  compose(
  withStyles(styles, {
    name: 'SelectKillStatus',
  }),
  connect(mapStateToProps, mapDispatchToProps))(SelectKillStatus);

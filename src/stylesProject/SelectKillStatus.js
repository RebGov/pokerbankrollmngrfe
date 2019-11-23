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
    const { classes } = this.props;
    let selections = this.props.allKillStatuses || []
    return (
      <div>
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="killpot-required">Kill Pot: </InputLabel>
          <Select
          id="standard-required"
          className="selectKill" value={this.props.newUserGame.kill_status_id} onChange={e => this.props.selectKillStatus({ id: e.target.value })}
          name="killpot"
          inputProps={{
            id: 'killpot-required',
          }}
          className1={classes.selectEmpty}>
            <MenuItem value="" disabled selected>Select Kill</MenuItem>
            {selections.map(killStatus => (
            <MenuItem key={killStatus.id} value={killStatus.id}>{killStatus.kill}</MenuItem>
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
    allKillStatuses: state.allKillStatuses,
    newUserGame: state.newUserGame

  }
}

const mapDispatchToProps = {
  selectKillStatus: selectKillStatus
}
SelectKillStatus.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default  compose(
  withStyles(styles, {
    name: 'SelectKillStatus',
  }),
  connect(mapStateToProps, mapDispatchToProps))(SelectKillStatus);

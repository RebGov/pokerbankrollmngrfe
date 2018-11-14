import React, {  Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import {selectGameBlinds} from '../actions/blindsNameActions'

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

});


class SelectGameBlindsName extends Component {



  render(){
    const { classes } = this.props;
    const selections = this.props.allBlindsNames || {}
    // const id = selection.id;

    return (
      <div>
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="blinds-required">Blinds: </InputLabel>
        <Select
          className="selectBlindsName"
          id="standard-required"
          value={this.props.newUserGame.blinds_name_id}
          onChange={e => this.props.selectGameBlinds({ id: e.target.value })}
          name="blinds"
          inputProps={{
            id: 'blinds-required',
          }}
          className={classes.selectEmpty}>
          <MenuItem value="" disabled selected>Select Blinds</MenuItem>
            {selections.map(blindsName => (
              <MenuItem key={blindsName.id} value={blindsName.id}>{blindsName.blinds}</MenuItem>
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
      allBlindsNames: state.allBlindsNames,
      newUserGame: state.newUserGame

    }
}

const mapDispatchToProps = {
  selectGameBlinds: selectGameBlinds
}
// SelectGameBlindsName.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
export default  compose(
  withStyles(styles, {
    name: 'SelectGameBlindsName',
  }),
  connect(mapStateToProps, mapDispatchToProps))(SelectGameBlindsName);

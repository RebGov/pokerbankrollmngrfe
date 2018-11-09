import React, {  Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FilledInput from '@material-ui/core/FilledInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  // textField: {
  //   marginLeft: theme.spacing.unit,
  //   marginRight: theme.spacing.unit,
  //   width: 200,
  // },
  // dense: {
  //   marginTop: 19,
  // },
  // menu: {
  //   width: 200,
  // },
});


class SelectGameBlindsName extends Component {



  render(){
    // const { classes } = this.props;
    const selections = this.props.allBlindsNames || {}
    // const id = selection.id;
    console.log("select Blinds", selections)
    return (
      <div>
        <label> Select Blinds: </label>
        <Select
          className="selectBlindsName"
          value={this.props.newUserGame.blinds_name_id}
          onChange={e => this.props.selectGameBlinds({ id: e.target.value })}>
          <MenuItem value="" disabled selected>Select Blinds</MenuItem>
            {selections.map(blindsName => (
              <MenuItem key={blindsName.id} value={blindsName.id}>{blindsName.blinds}</MenuItem>
            ))}
        </Select>
        <button onClick={console.log("clicked + button") }> + </button>
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

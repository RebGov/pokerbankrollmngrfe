import React, {  Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
// import {selectGameBlinds} from '../actions/blindsNameActions'
import { setBlindsNameSearch } from '../actions/blindsNameActions'


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
});


class SetGameBlindsNameSearch extends Component {



  render(){
    // const { classes } = this.props;
    const selections = this.props.allBlindsNames || {}
    // const id = selection.id;

    return (
      <div>
        <label> Select Blinds: </label>
        <Select
          className="filterbyBlindsName"
          value={this.props.gameFilters.blinds_name_id}
          onChange={e => this.props.setBlindsNameSearch({ id: e.target.value })}>
          <MenuItem value="" >All Blinds:</MenuItem>
            {selections.map(blindsName => (
              <MenuItem key={blindsName.id} value={blindsName.id}>{blindsName.blinds}</MenuItem>
            ))}
        </Select>
      </div>
    )
  }
}

function mapStateToProps(state)  {
    return {
      allBlindsNames: state.allBlindsNames,
      gameFilters: state.gameFilters

    }
}

const mapDispatchToProps = {
  setBlindsNameSearch: setBlindsNameSearch
}

export default  compose(
  withStyles(styles, {
    name: 'SetGameBlindsNameSearch',
  }),
  connect(mapStateToProps, mapDispatchToProps))(SetGameBlindsNameSearch);

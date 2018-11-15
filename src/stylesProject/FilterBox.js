import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import SetKillStatusSearch from './SetKillStatusSearch';
import SetGameLocationSearch from './SetGameLocationSearch';
import SetGameNameSearch from './SetGameNameSearch';
import SetGameBlindsNameSearch from './SetGameBlindsNameSearch';
import SetDateSearch from './SetDateSearch';
//import { setGameLocationSearch } from '../actions/gameLocationActions'
// import { setGameNameSearch } from '../actions/gameNameActions';
// import { setBlindsNameSearch } from '../actions/blindsNameActions';
// import { setKillStatusSearch } from '../actions/killStatusActions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class FilterBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state={
      open: false,
      age: '',
      selectedDate: new Date(),
    }
  }


    handleDateChange = date => {
      this.setState({ selectedDate: date });
    };

  handleChange = name => event => {
     this.setState({ [name]: Number(event.target.value) });
  };

handleClickOpen = () => {
  this.setState({ open:true });
}

  handleClose = () => {
     this.setState({ open: false });
  };
//** check: if 'NONE' is selected; should stay blank, so all will be grabbed for that field.
  render() {
     // console.log("FilterBox:", this.props.allGameNames, this.props.allGameLocations)
    // debugger
    const { classes } = this.props;
    // let locations = this.props.allGameLocations || []
    // let gametypes = this.props.allGameNames || []
    // let blindstype = this.props.allBlindsNames || []
    // let killtypes = this.props.allKillStatuses || []


    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>Filter Bankroll History</Button>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>Filter Bankroll History By:</DialogTitle>
            <DialogContent>
              <form className={classes.container}>
              <FormControl
                className={classes.formControl}>
                <SetDateSearch />
                </FormControl>
                <FormControl
                  className={classes.formControl}>
                  <SetGameLocationSearch />
                </FormControl>
                <FormControl
                  className={classes.formControl}>
                  <SetGameNameSearch />
                </FormControl>
                <FormControl
                  className={classes.formControl}>
                  <SetGameBlindsNameSearch />
                </FormControl>
                <FormControl
                  className={classes.formControl}>
                  <SetKillStatusSearch />
                </FormControl>
              </form>
            </DialogContent>
          <DialogActions>
          //clear all the items in the box?
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

FilterBox.propTypes = {
  classes: PropTypes.object.isRequired,
};
function mapStateToProps(state)  {
  return {

    // allGameLocations: state.allGameLocations,
    // allBlindsNames: state.allBlindsNames,
    // allGameNames: state.allGameNames,
    // gameFilters: state.gameFilters

  }
}

const mapDispatchToProps = {

  // setGameLocationSearch: setGameLocationSearch

}


export default withStyles(styles)(FilterBox);

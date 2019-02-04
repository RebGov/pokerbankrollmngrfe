import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';

import SetKillStatusSearch from './SetKillStatusSearch';
import SetGameLocationSearch from './SetGameLocationSearch';
import SetGameNameSearch from './SetGameNameSearch';
import SetGameBlindsNameSearch from './SetGameBlindsNameSearch';
import SetDateSearch from './SetDateSearch';
import { clearFilters } from '../actions/userActions';


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

  cancel = () => {
    this.props.clearFilters()
    this.handleClose()
  }

  handleClose = () => {
     this.setState({ open: false });
  };
  // doFilterOk = () => {
  //   this.props.useFilters()
  //   this.handleClose()
  // } This to wait to filter until 'ok' is selected

  render() {
    console.log("FilterBox: ", this. props.gameFilters)
     // console.log("FilterBox:", this.props.allGameNames, this.props.allGameLocations)
    // debugger
    const { classes } = this.props;

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
                <SetDateSearch gameFilters={this.props.gameFilters} />
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
            <Button onClick={this.cancel} color="primary">
              CLEAR FILTERS
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

    gameFilters: state.gameFilters
    // allGameLocations: state.allGameLocations,
    // allBlindsNames: state.allBlindsNames,
    // allGameNames: state.allGameNames,
    // gameFilters: state.gameFilters

  }
}

const mapDispatchToProps = {
  clearFilters: clearFilters
  // setGameLocationSearch: setGameLocationSearch

}


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(FilterBox));

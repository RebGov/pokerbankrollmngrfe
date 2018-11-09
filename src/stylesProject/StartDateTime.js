import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function StartDateTime(props) {
  const { classes } = props;
  // let currentDate = moment()
  // let defaultDateTime = moment();
  return (

      <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label="Start Date & Time"
          type="datetime-local"
          defaultValue="2018-11-01T10:00"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>

  );
}

StartDateTime.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StartDateTime);

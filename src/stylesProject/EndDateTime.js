import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

function EndDateTime(props) {
  const { classes } = props;
  // let currentDate = Date.now
  // let defaultDateTime = moment(currentDate).format();
  // let defaultDateTime = moment();
  return (

    <div className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="End Date & Time"
        type="datetime-local"
        defaultValue="11-01-2018T10:00AM"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>

  );
}

EndDateTime.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EndDateTime);

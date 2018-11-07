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
  let currentDate = Date.now
  let defaultDateTime = moment(currentDate).format();
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="End Date & Time"
        type="datetime-local"
        defaultValue={defaultDateTime}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

EndDateTime.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EndDateTime);

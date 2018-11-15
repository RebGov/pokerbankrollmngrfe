import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class AboutPage extends Component {
  render(){
    const { classes } = this.props;
    // const style={
    //   border: "1px solid cyan",
    //   padding: "1rem",
    //   margin: "1rem"
    // };
    return (
      <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Hello About Page.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
    )
  }

}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = ( state ) => {
  return {

  }
}
const mapDispatchToProps = {


}
export default  compose(
  withStyles(styles, {
    name: 'AboutPage',
  }),
  connect(mapStateToProps, mapDispatchToProps))(AboutPage);

// export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

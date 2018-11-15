import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router';
import AllGames from '../components/AllGames'
import { Link } from 'react-router-dom';
import pokerRedBkrd from '../images/pokerRedBkrd.jpg'
// import blackNgreenChips from '../images/blackNgreenChips.jpg'
import FilterBox from '../stylesProject/FilterBox';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { setGameLocationSearch } from '../actions/gameLocationActions'
import { setGameNameSearch } from '../actions/gameNameActions';
import { setBlindsNameSearch } from '../actions/blindsNameActions';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    flexGrow: 5,
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    backgroundImage: `url(${pokerRedBkrd})`,
    minHeight: '125vh',
    minWidth:'150vh',
    backgroundPosition: 'top-center',
    backgroundColor: "#050000",
    backgroundRepeat: 'repeat-y',
    //backgroundSize: 'cover',

  },
  paperStyles:{
    marginLeft: '42vh',
    paddingLeft: theme.spacing.unit *4,
    paddingRight:theme.spacing.unit*4,
    backgroundPosition: 'center',
    textAlign: "center",
    backgroundColor: '#C1ADAB',
    flexgrow: 5,
    // paddingRight: theme.spacing.unit * 25,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    zIndex: -1,
    maxWidth: '100vh',
    rounded: 'square={false}',

  },
  grow: {
    flexGrow: 1,
  },
});


class GHistory extends Component {

  render(){
      const { classes } = this.props;


    return ((this.props.playedGames === undefined && this.props.playedGames == 0) ?  (
      <div className={classes.paperStyles}  >
        <Paper className={classes.paperStyles} elevation={1}>
          <Typography style={{color:'#C41B0D'}} variant="h5" component="h3">
            Your Personal History at Ante Up Poker Bankroll Suite:
          </Typography>
            <Link to={{pathname: `/${localStorage.user_id}/NewGame`}}>
              <Typography component="p">
                Please Enter A Game Session.
              </Typography>
            </Link>
          </Paper>
        </div> ):
    (
      <div className={classes.root}>
        <Paper className={classes.paperStyles} elevation={1}>
          <Typography style={{color:'#C41B0D'}} variant="h5" component="h3">
            {this.props.currentUser.first_name}'s Ante Up Played Sessions History:
          </Typography>
          <Typography>
            Please Select Filters for Played Sessions History:
          </Typography>
          <FilterBox />
          <Typography>
            If no filters selected, entire history will display.
          </Typography>
        </Paper>

          <AllGames />

    </div>
    )
  )
  }

}
const mapStateToProps = ( state ) => {


  return {

    playedGames: state.userPlayedGames,
    currentUser: state.currentUser


  }
}
const mapDispatchToProps = {



}
GHistory.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default  compose(
  withStyles(styles, {
    name: 'GHistory',
  }),
  connect(mapStateToProps, mapDispatchToProps))(withRouter(GHistory));

// export default connect(mapStateToProps, mapDispatchToProps)(GHistory);
// <AllGames />
// <GameTable />
// <SetGameLocationSearch />
// <SetGameNameSearch />
// <SetGameBlindsNameSearch />
// <SetKillStatusSearch />

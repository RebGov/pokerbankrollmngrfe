import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  // list: {
  //   width: 250,
  // },
  // fullList: {
  //   width: 'auto',
  // },
};

class GameTable extends Component {

  render(){
    return(
      <div>Hello Table</div>
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

export default  compose(
  withStyles(styles, {
    name: 'GameTable',
  }),
  connect(mapStateToProps, mapDispatchToProps))(GameTable);

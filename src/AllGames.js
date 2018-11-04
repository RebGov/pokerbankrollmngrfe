import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllGames extends Component {
  render() {
    return (
      <div>
        <h1>All Games</h1>
          
      </div>

    );
  }
}

const mapStateToProps = ( state ) => {
    return {
      playedGames: state.currentUser
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllGames);

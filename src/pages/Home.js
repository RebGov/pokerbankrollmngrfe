import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const style={
      // border: "1px solid teal",
      padding: "1rem",
      margin: "1rem"
    };
  // console.log('HomePage: ',this.props.currentUser.id)
  return (
    <div style={style}>
    <h1>Welcome to Ante Up Poker Suite</h1>

    </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
      jwt: state.jwt,
      currentUser: state.currentUser.id
  }
}
const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

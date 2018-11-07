import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentGame extends Component {
  render(){
    const style={
      border: "1px solid magenta",
      padding: "1rem",
      margin: "1rem"
    };
    return (
      <div style={style}>Hello Current Game </div>
    )
  }

}
const mapStateToProps = ( state ) => {
  return {

  }
}
const mapDispatchToProps = {


}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentGame);

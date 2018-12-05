import React, { Component } from 'react';
import { connect } from 'react-redux';

class OneGame extends Component {
  render(){
    const style={
      border: "1px solid magenta",
      padding: "1rem",
      margin: "1rem"
    };
    return (
      <div style={style}>Hello OneGame </div>
    )
  }

}
const mapStateToProps = ( state ) => {
  return {

  }
}
const mapDispatchToProps = {


}

export default connect(mapStateToProps, mapDispatchToProps)(OneGame);

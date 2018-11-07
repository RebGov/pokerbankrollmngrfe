import React, { Component } from 'react';
import { connect } from 'react-redux';

class GHistory extends Component {
  render(){
    const style={
      border: "1px solid cyan",
      padding: "1rem",
      margin: "1rem"
    };
    return (
      <div style={style}>Hello Game History Page</div>
    )
  }

}
const mapStateToProps = ( state ) => {
  return {

  }
}
const mapDispatchToProps = {


}

export default connect(mapStateToProps, mapDispatchToProps)(GHistory);

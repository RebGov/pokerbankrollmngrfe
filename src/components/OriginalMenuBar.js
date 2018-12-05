import React, { Component } from 'react';
import { connect } from 'react-redux';





class OriginalMenuBar extends Component {
  render(){
    // const style={
    //   border: "1px solid green",
    //   padding: "1rem",
    //   margin: "1rem"
    // };
    return (
      <div >Hello MenuBar</div>
    )
  }

}
const mapStateToProps = ( state ) => {
  return {

  }
}
const mapDispatchToProps = {


}

export default connect(mapStateToProps, mapDispatchToProps)(OriginalMenuBar);

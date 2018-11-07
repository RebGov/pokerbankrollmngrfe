import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormUpdateGame extends Component {
  render(){
    const style={
      border: "1px solid blue",
      padding: "1rem",
      margin: "1rem"
    };
    return (
      <div style={style}>Hello Update Played Game Form</div>
    )
  }

}
const mapStateToProps = ( state ) => {
  return {

  }
}
const mapDispatchToProps = {


}

export default connect(mapStateToProps, mapDispatchToProps)(FormUpdateGame);

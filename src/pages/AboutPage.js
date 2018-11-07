import React, { Component } from 'react';
import { connect } from 'react-redux';

class AboutPage extends Component {
  render(){
    const style={
      border: "1px solid cyan",
      padding: "1rem",
      margin: "1rem"
    };
    return (
      <div style={style}>Hello About Page</div>
    )
  }

}
const mapStateToProps = ( state ) => {
  return {

  }
}
const mapDispatchToProps = {


}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

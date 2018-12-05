import React, { Component } from 'react';
import { connect } from 'react-redux';
import TemporaryDrawer from '../containers/TemporaryDrawer';

class OriginalHeader extends Component {
  render(){
    const style={
      border: "1px solid brown",
      padding: "1rem",
      margin: "1rem"
    };
    return (
      <div style={style}>Hello Header
      <TemporaryDrawer />
      </div>
    )
  }

}
const mapStateToProps = ( state ) => {
  return {

  }
}
const mapDispatchToProps = {


}

export default connect(mapStateToProps, mapDispatchToProps)(OriginalHeader);

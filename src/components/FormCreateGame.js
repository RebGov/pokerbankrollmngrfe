import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartDateTime from '../stylesProject/StartDateTime'
import EndDateTime from '../stylesProject/StartDateTime'

class FormCreateGame extends Component {
  render(){
    const style={
      border: "1px solid green",
      padding: "1rem",
      margin: "1rem"
    };
    return (
      <div style={style}> Hello Create Played Game Form
        <form>
        <div >
          <label>$ </label>
          <input  type="integer"/>
        </div>
        <div >
          <label>Email: </label>
          <input onChange={e => this.props.updateCurrentUser({ email: e.target.value })} type="email"/>
        </div>
        <div>
        <StartDateTime />
        </div>
        <div>
        <EndDateTime />
        </div>
        </form>


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

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateGame);

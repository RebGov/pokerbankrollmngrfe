import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
// import DateTimePicker from 'material-ui-datetimepicker';
// import DatePickerDialog from '@material-ui/DatePicker/DatePickerDialog'
// import TimePickerDialog from '@material-ui/TimePicker/TimePickerDialog';
// import StartDateTime from '../stylesProject/StartDateTime';
// import EndDateTime from '../stylesProject/StartDateTime';

class FormCreateGame extends Component {
  render(){
    const style={
      border: "1px solid green",
      padding: "1rem",
      margin: "1rem"
    };
    return (
      <div style={style}>
      <h4>Hello Create Played Game Form</h4>

        <form onSubmit={this.handleSubmit}>
        <div>
          <label> Select Location: </label>
          <select value={console.log('value')} onChange={console.log("handleChange")}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="Location">Location</option>
            <option value="mango">Mango</option>
          </select>
        </div>
        <br />
        <div>
          <label> Select Game: </label>
          <select value={console.log('value')} onChange={console.log("handleChange")}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="Game">Game</option>
            <option value="mango">Mango</option>
          </select>
        </div>
        <br/>
        <div className="blinds_selector">
        <label> Select Blinds: </label>
          <select style={{color: 'primary'}} value={console.log('value')} onChange={console.log("handleChange")}>
            <option value="Opt1">Opt1</option>
            <option value="lime">Lime</option>
            <option  selected value="Blinds">Blinds</option>
            <option value="mango">Mango</option>
          </select>
        </div>
        <br/>
        <div >
          <label>Buy in: $ </label>
          <input  type="integer"/>
        </div>
        <br/>
        <div>
        
        </div>
        <br/>
        <div >
          <label>Cash out: $ </label>
          <input  type="integer"/>
        </div>
        <br/>
        <div>

        </div>
        <br/>
        </form>
        <Button variant="contained" color="primary" onClick={console.log('submit form')} >Submit New Game</Button>

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

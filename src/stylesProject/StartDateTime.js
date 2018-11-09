import React, { Fragment, PureComponent } from 'react';
import { DateTimePicker } from 'material-ui-pickers';
import { connect } from 'react-redux'
import {updateNewGame} from '../actions/userActions'

class StartDateTime extends PureComponent {
  // state = {
  //   start_date_time: new Date('2018-01-01T00:00:01.000Z'),
  // }
  //
  // handleDateChange = (date) => {
  //   debugger
  //   this.setState({ start_date_time: date });
  // }


  render() {
    // const { start_date_time } = this.state;
 console.log(this.updateNewGame)
    return (
      <Fragment>
        <div className="picker">
          <DateTimePicker
          value={this.props.value}
          onChange={date => this.props.updateNewGame({ start_date_time: date })}
          label="Start Date Time"
            showTodayButton
          />
        </div>

      </Fragment>
    );
  }
}

// const mapStateToProps = ( state ) => {
//   // return {
//   // start_date_time: state.newUserGame.start_date_time
//   //
//   // }
// }
const mapDispatchToProps = {
  updateNewGame: updateNewGame

}

export default connect(null, mapDispatchToProps)(StartDateTime);
// export default StartDateTime;

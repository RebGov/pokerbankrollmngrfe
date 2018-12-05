import React, { Fragment, PureComponent } from 'react';
import { DateTimePicker } from 'material-ui-pickers';

import { connect } from 'react-redux'
import {updateNewGame} from '../actions/userActions'

class EndDateTime extends PureComponent {
  // state = {
  //   end_date_time: new Date('2018-01-01T00:00:01.000Z'),
  // }
  //
  // handleDateChange = (date) => {
  //   this.setState({ end_date_time: date });
  // }


  render() {
    // const { end_date_time } = this.state;

    return (
      <Fragment>
        <div className="picker">
          <DateTimePicker
            value={this.props.value}
            onChange={date => this.props.updateNewGame({ end_date_time: date })}
            label="End Date Time"
            showTodayButton
          />
        </div>

      </Fragment>
    );
  }
}

//
// <div className="picker">
//   <DateTimePicker
//     autoOk
//     ampm={false}
//     disableFuture
//     value={selectedDate}
//     onChange={this.handleDateChange}
//     label="24h clock"
//   />
// </div>

// <div className="picker">
//   <DateTimePicker
//     value={selectedDate}
//     disablePast
//     onChange={this.handleDateChange}
//     label="With Today Button"
//     showTodayButton
//   />
// </div>
const mapDispatchToProps = {
  updateNewGame: updateNewGame

}

export default connect(null, mapDispatchToProps)(EndDateTime);

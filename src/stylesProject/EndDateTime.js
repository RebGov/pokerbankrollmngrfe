import React, { Fragment, PureComponent } from 'react';
import { DateTimePicker } from 'material-ui-pickers';
import { connect } from 'react-redux'
import {updateNewGame} from '../actions/userActions'

class EndDateTime extends PureComponent {

  render() {

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


const mapDispatchToProps = {
  updateNewGame: updateNewGame

}

export default connect(null, mapDispatchToProps)(EndDateTime);

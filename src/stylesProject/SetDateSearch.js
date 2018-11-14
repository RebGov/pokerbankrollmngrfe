import React, { Fragment, PureComponent } from 'react';
import { DateTimePicker } from 'material-ui-pickers';
import { connect } from 'react-redux'
import { DatePicker } from 'material-ui-pickers';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class SetDateSearch extends PureComponent {
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
      <div>
      <Button
        variant="contained" color="primary"
        onclick={this.handleYear}
      >Current Year</Button>
      <Button
        variant="contained" color="primary"
        onclick={this.handleMonth}
      >Current Month</Button>
      </div>
      <div className="picker">
          <DateTimePicker
          value={this.props.value}
          maxDate={new Date()}
          onChange={date => this.props.SelectDateSearch({ start_date_time: date })}
          label="Start Date Time"
            showTodayButton
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {

}

}
const mapDispatchToProps= {

  // updateNewGame: updateNewGame

}

export default connect(null, mapDispatchToProps)(SetDateSearch);
// export default StartDateTime;

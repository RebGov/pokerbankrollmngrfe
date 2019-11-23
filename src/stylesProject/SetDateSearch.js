import React, { Fragment, PureComponent } from 'react';
// import { DateTimePicker } from 'material-ui-pickers';
import { connect } from 'react-redux'
import { DatePicker } from 'material-ui-pickers';
//import FormControl from '@material-ui/core/FormControl';
//import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { selectYearDateSearch } from '../actions/userActions';
import { selectMonthDateSearch } from '../actions/userActions';
import { selectStartDateSearch } from '../actions/userActions';
import { selectEndDateSearch} from '../actions/userActions';


// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   formControl: {
//     margin: theme.spacing.unit,
//     minWidth: 120,
//   },
// });

class SetDateSearch extends PureComponent {



  render() {
    console.log("SetDateSearch: ", this.props.gameFilters.start_date, this.props.gameFilters.end_date)

    return (
      <Fragment>
      <div>
      <Button
        variant="contained" color="primary"
        onClick={e=>{this.props.selectYearDateSearch(e)}}
      >Current Year</Button>
      <Button
        variant="contained" color="primary"
        onClick={e=>this.props.selectMonthDateSearch(e) }
      >Current Month</Button>

      <div className="picker">
          <DatePicker
          value={this.props.gameFilters.start_date}
          maxDate={new Date()}
          openToYearSelection={false}

          onChange={date =>this.props.selectStartDateSearch(date)}
          label="Start Date"
            showTodayButton
          />
        </div>
        <div className="picker">
            <DatePicker
            value={this.props.gameFilters.end_date}
            maxDate={new Date()}
            openToYearSelection={false}
            onChange={date => this.props.selectEndDateSearch(date)}
            label="End Date"
              showTodayButton
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

// const mapStateToProps = ( state ) => {
//   return {
//
// }

// }
const mapDispatchToProps= {

  selectYearDateSearch: selectYearDateSearch,
  selectMonthDateSearch: selectMonthDateSearch,
  selectStartDateSearch: selectStartDateSearch,
  selectEndDateSearch: selectEndDateSearch

}

export default connect(null, mapDispatchToProps)(SetDateSearch);

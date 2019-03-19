import React from "react";
import { connect } from "react-redux";
import {
  editTextFilter,
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseFilters extends React.Component {
  state = {
    dateRangePickerFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  render() {
    return (
      <div>
        <h2>Filters</h2>
        <input
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(editTextFilter({ text: e.target.value }));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            switch (e.target.value) {
              case "amount":
                this.props.dispatch(sortByAmount());
                break;

              case "date":
                this.props.dispatch(sortByDate());
                break;
            }
          }}
        >
          <option value="date" defaultValue>
            Date
          </option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          numberOfMonths={1}
          isOutsideRange={() => false}
          focusedInput={this.state.dateRangePickerFocused}
          onFocusChange={focused =>
            this.setState(() => ({ dateRangePickerFocused: focused }))
          }
          onDatesChange={this.onDatesChange}
          startDateId="date_range_start"
          endDateId="date_range_end"
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseFilters);

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

export class ExpenseFilters extends React.Component {
  state = {
    dateRangePickerFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  ontextFilterChange = e => {
    this.props.editTextFilter({ text: e.target.value });
  };

  onSortChange = e => {
    switch (e.target.value) {
      case "amount":
        this.props.sortByAmount();
        break;

      case "date":
        this.props.sortByDate();
        break;
    }
  };

  onFocusChange = focused => {
    this.setState(() => ({ dateRangePickerFocused: focused }));
  };

  render() {
    return (
      <div>
        <h2>Filters</h2>
        <input
          value={this.props.filters.text}
          onChange={this.ontextFilterChange}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
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
          onFocusChange={this.onFocusChange}
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

const mapDisaptchToProps = (dispatch, props) => ({
  setStartDate: date => dispatch(setStartDate(date)),
  setEndDate: date => dispatch(setEndDate(date)),
  editTextFilter: data => dispatch(editTextFilter(data)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate())
});

export default connect(
  mapStateToProps,
  mapDisaptchToProps
)(ExpenseFilters);

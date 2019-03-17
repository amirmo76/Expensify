import React from 'react';
import { connect } from "react-redux";
import { editTextFilter, sortByAmount, sortByDate } from "../actions/filters";

const ExpenseFilters = (props) => (
  <div>
    <h2>Filters</h2>
    <input value={props.filters.text} onChange={e => {
      props.dispatch(editTextFilter({text: e.target.value}))
    }}/>
    <select value={props.filters.sortBy} onChange={e => {
      switch (e.target.value) {
        case 'amount':
          props.dispatch(sortByAmount());
          break;

        case 'date':
          props.dispatch(sortByDate());
          break;
      }
    }}>
      <option value="date" defaultValue>Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
)

const mapStateToProps = (state) => (
  {
    filters: state.filters
  }
)

export default connect(mapStateToProps)(ExpenseFilters);
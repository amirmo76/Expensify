import React from 'react';
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseItem";
import { getVisibleExpenses } from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1>Expense list:</h1>
    {
      props.expenses.map((cur) => <ExpenseItem {...cur} key={cur.id}/>)
    }
  </div>
)

const mapStateToProps = (state) => (
  {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  }
)

export default connect(mapStateToProps)(ExpenseList);
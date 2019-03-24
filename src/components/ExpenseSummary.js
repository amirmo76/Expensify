import React from "react";
import { connect } from "react-redux";
import { getVisibleExpenses } from "../selectors/expenses";
import { getExpensesTotal } from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
  return (
    <p>{`Viewing ${expensesCount} expense${
      expensesCount === 1 ? "" : "s"
    } totalling ${numeral(expensesTotal / 100).format("$0,0.00")}`}</p>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expensesTotal: getExpensesTotal(visibleExpenses),
    expensesCount: visibleExpenses.length
  };
};

export default connect(mapStateToProps)(ExpenseSummary);

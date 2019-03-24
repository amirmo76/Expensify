import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilters from "./ExpenseFilters";
import ExpenseSummary from "./ExpenseSummary";

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseSummary />
      <ExpenseFilters />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboardPage;

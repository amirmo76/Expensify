import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = props => (
  <div>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(editExpense({ id: props.expense.id, data: expense }));
        props.history.push("/");
      }}
      expense={props.expense}
    />

    <button
      onClick={e => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push("/");
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(cur => cur.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);

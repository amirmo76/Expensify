import React from 'react'
import { connect } from 'react-redux';
import { removeExpense } from "../actions/expenses";

const ExpenseItem = ({ description, amount, createdAt, id, dispatch }) => (
  <div>
    <p>Description: {description}, amount: {amount}, created at: {createdAt}</p>
    <button onClick={e => {
      dispatch(removeExpense({ id }))
    }}>Remove</button>
  </div>
)

export default connect()(ExpenseItem);
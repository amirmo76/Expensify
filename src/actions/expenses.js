import uuid from "uuid";

export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

export const removeExpense = ({ id } = {}) => {
  if (!id) {
    throw new Error("not specifying the expense id to remove!");
  }

  return {
    type: "REMOVE_EXPENSE",
    id
  };
};

export const editExpense = ({ id, data } = {}) => {
  if (!id) {
    throw new Error("not specifying the expense id to edit!");
  }

  return {
    type: "EDIT_EXPENSE",
    id,
    data
  };
};

import expensesReducers from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should remove expense with valid id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const resultState = expensesReducers(expenses, action);
  expect(resultState).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense with unvalid id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1
  };
  const resultState = expensesReducers(expenses, action);
  expect(resultState).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "5",
    description: "charity",
    note: "",
    amount: 10000,
    createdAt: 0
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const resultState = expensesReducers(expenses, action);
  expect(resultState).toEqual([...expenses, expense]);
});

test("should edit an expense with valid id", () => {
  const description = "charity";
  const amount = 2015;
  const action = {
    type: "EDIT_EXPENSE",
    data: {
      description,
      amount
    },
    id: expenses[0].id
  };
  const resultState = expensesReducers(expenses, action);
  expect(resultState[0].description).toEqual(description);
  expect(resultState[0].amount).toEqual(amount);
});

test("should edit an expense with valid id", () => {
  const description = "charity";
  const amount = 2015;
  const action = {
    type: "EDIT_EXPENSE",
    data: {
      description,
      amount
    },
    id: expenses[0].id
  };
  const resultState = expensesReducers(expenses, action);
  expect(resultState[0].description).toEqual(description);
  expect(resultState[0].amount).toEqual(amount);
});

test("should not edit an expense with unvalid id", () => {
  const description = "charity";
  const amount = 2015;
  const action = {
    type: "EDIT_EXPENSE",
    data: {
      description,
      amount
    },
    id: -1
  };
  const resultState = expensesReducers(expenses, action);
  expect(resultState).toEqual(expenses);
});

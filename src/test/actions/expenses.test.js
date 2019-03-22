import { removeExpense, addExpense, editExpense } from "../../actions/expenses";

test("should generate removeExpense action object", () => {
  expect(removeExpense({ id: "123asdihandj213-1231---!" })).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123asdihandj213-1231---!"
  });
});

test("should generate editExpense action object", () => {
  expect(
    editExpense({
      id: "1234gh",
      data: {
        note: "note"
      }
    })
  ).toEqual({
    type: "EDIT_EXPENSE",
    id: "1234gh",
    data: {
      note: "note"
    }
  });
});

test("should generate the right addExpense action object with provided values", () => {
  const expense = {
    description: "Coffee",
    amount: 2000,
    note: "some note",
    createdAt: 200000
  };
  expect(addExpense(expense)).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });
});

test("should generate the right addExpense action object with default values", () => {
  expect(addExpense()).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});

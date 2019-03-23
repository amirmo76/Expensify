import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let wrapper, historySpy, editExpenseSpy, removeExpenseSpy;

beforeEach(() => {
  historySpy = { push: jest.fn() };
  editExpenseSpy = jest.fn();
  removeExpenseSpy = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      history={historySpy}
      removeExpense={removeExpenseSpy}
      editExpense={editExpenseSpy}
    />
  );
});

test("should render EditExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(editExpenseSpy).toHaveBeenLastCalledWith({
    data: expenses[1],
    id: expenses[0].id
  });
  expect(historySpy.push).toHaveBeenLastCalledWith("/");
});

test("should handle removeExpense", () => {
  wrapper.find("button").simulate("click");
  expect(removeExpenseSpy).toHaveBeenLastCalledWith({
    id: expenses[0].id
  });
  expect(historySpy.push).toHaveBeenLastCalledWith("/");
});

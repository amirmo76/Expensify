import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";

let wrapper, historySpy, addExpense;

beforeEach(() => {
  historySpy = { push: jest.fn() };
  addExpense = jest.fn();
  wrapper = shallow(
    <AddExpensePage history={historySpy} addExpense={addExpense} />
  );
});

test("should render AddExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should call addExpense with the right props", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(historySpy.push).toHaveBeenCalledWith("/");
  expect(addExpense).toHaveBeenCalledWith(expenses[0]);
});

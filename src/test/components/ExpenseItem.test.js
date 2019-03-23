import React from "react";
import expenses from "../fixtures/expenses";
import ExpenseItem from "../../components/ExpenseItem";
import { shallow } from "enzyme";

test("should render ExpenseItem", () => {
  const wrapper = shallow(<ExpenseItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

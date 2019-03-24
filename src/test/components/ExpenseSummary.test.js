import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpenseSummary";
import expenses from "../fixtures/expenses";

test("should render ExpenseSummary with 1 expense correctly", () => {
  const wrapper = shallow(
    <ExpenseSummary expensesCount={1} expensesTotal={209567} />
  );

  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary with more than one expense correctly", () => {
  const wrapper = shallow(
    <ExpenseSummary expensesCount={2} expensesTotal={9823210} />
  );

  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary with no expense correctly", () => {
  const wrapper = shallow(
    <ExpenseSummary expensesCount={0} expensesTotal={0} />
  );

  expect(wrapper).toMatchSnapshot();
});

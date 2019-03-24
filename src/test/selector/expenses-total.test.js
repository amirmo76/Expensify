import { getExpensesTotal } from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should getExpensesTotal calculate the right sum", () => {
  expect(getExpensesTotal(expenses)).toBe(3300);
});

test("should getExpensesTotal handle no expense", () => {
  expect(getExpensesTotal([])).toBe(0);
});

test("should getExpensesTotal handle one expense", () => {
  expect(getExpensesTotal([expenses[0]])).toBe(500);
});

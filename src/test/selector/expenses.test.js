import { getVisibleExpenses } from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

test("should filter by text", () => {
  const filters = {
    text: "u",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  expect(getVisibleExpenses(expenses, filters)).toEqual([expenses[2]]);
  filters.text = "e";
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[0]
  ]);
  filters.text = "";
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[1],
    expenses[0]
  ]);
});

test("should filter by start date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
  expect(getVisibleExpenses(expenses, filters)).toEqual([expenses[2]]);
  filters.startDate = moment(0).subtract(2, "days");
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[1],
    expenses[0]
  ]);
  filters.startDate = moment(0).subtract(1, "days");
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[1]
  ]);
  filters.startDate = moment(0).add(5, "days");
  expect(getVisibleExpenses(expenses, filters)).toEqual([]);
  filters.startDate = moment(0).subtract(5, "days");
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[1],
    expenses[0]
  ]);
});

test("should filter by end date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0)
  };
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[1],
    expenses[0]
  ]);
  filters.endDate = moment(0).subtract(2, "days");
  expect(getVisibleExpenses(expenses, filters)).toEqual([expenses[0]]);
  filters.endDate = moment(0).subtract(1, "days");
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[1],
    expenses[0]
  ]);
  filters.endDate = moment(0).add(5, "days");
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[1],
    expenses[0]
  ]);
  filters.endDate = moment(0).subtract(5, "days");
  expect(getVisibleExpenses(expenses, filters)).toEqual([]);
});

test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[1],
    expenses[0]
  ]);
});

test("should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[1],
    expenses[0],
    expenses[2]
  ]);
});

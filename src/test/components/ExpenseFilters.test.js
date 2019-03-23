import React from "react";
import { shallow } from "enzyme";
import { ExpenseFilters } from "../../components/ExpenseFilters";
import { filters, altFilters } from "../fixtures/filters";
import moment from "moment";

let wrapper,
  setStartDateSpy,
  setEndDateSpy,
  editTextFilterSpy,
  sortByAmountSpy,
  sortByDateSpy;

beforeEach(() => {
  setStartDateSpy = jest.fn();
  setEndDateSpy = jest.fn();
  editTextFilterSpy = jest.fn();
  sortByAmountSpy = jest.fn();
  sortByDateSpy = jest.fn();
  wrapper = shallow(
    <ExpenseFilters
      filters={filters}
      setStartDate={setStartDateSpy}
      setEndDate={setEndDateSpy}
      editTextFilter={editTextFilterSpy}
      sortByAmount={sortByAmountSpy}
      sortByDate={sortByDateSpy}
    />
  );
});

test("should rernder ExpenseFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseFilters with data correctly", () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "some value";
  wrapper.find("input").simulate("change", { target: { value } });
  expect(editTextFilterSpy).toHaveBeenLastCalledWith({ text: value });
});

test("should sort by amount", () => {
  const value = "amount";
  wrapper.find("select").simulate("change", { target: { value } });
  expect(sortByAmountSpy).toHaveBeenCalled();
});

test("should sort by date", () => {
  wrapper.setProps({ filters: altFilters });
  const value = "date";
  wrapper.find("select").simulate("change", { target: { value } });
  expect(sortByDateSpy).toHaveBeenCalled();
});

test("should handle date changes", () => {
  const startDate = moment(0).add(2, "hours");
  const endDate = moment(0).add(3, "days");
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({
    startDate,
    endDate
  });
  expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
  expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
});

test("should handle focus change", () => {
  let value = "endDate";
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(value);
  expect(wrapper.state("dateRangePickerFocused")).toBe(value);
});

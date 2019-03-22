import {
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
  editTextFilter
} from "../../actions/filters";

test("should generate the right action object for setStartDate", () => {
  expect(setStartDate(200)).toEqual({
    type: "SET_START_DATE",
    date: 200
  });
});

test("should generate the right action object for setEndDate", () => {
  expect(setEndDate(200)).toEqual({
    type: "SET_END_DATE",
    date: 200
  });
});

test("should generate the right action object for sortByAmount", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("should generate the right action object for sortByDate", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("should generate the right action object for editTextFilter with provided", () => {
  expect(editTextFilter({ text: "f" })).toEqual({
    type: "EDIT_TEXT_FILTER",
    text: "f"
  });
});

test("should generate the right action object for editTextFilter with default", () => {
  expect(editTextFilter()).toEqual({
    type: "EDIT_TEXT_FILTER",
    text: ""
  });
});

import filterReducer from "../../reducers/filters";
import moment from "moment";

test("should setup initialize", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortByAmount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortByDate", () => {
  const state = {
    text: "",
    sortby: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const resultSatate = filterReducer(state, { type: "SORT_BY_DATE" });
  expect(resultSatate.sortBy).toBe("date");
});

test("should set Text filter", () => {
  const state = {
    text: "from",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  let resultSatate = filterReducer(state, {
    type: "EDIT_TEXT_FILTER",
    text: "amir"
  });
  expect(resultSatate.text).toBe("amir");
});

test("should set startDate", () => {
  const state = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  let resultSatate = filterReducer(state, {
    type: "SET_START_DATE",
    date: moment(2)
  });
  expect(resultSatate.startDate).toEqual(moment(2));
});

test("should set endDate", () => {
  const state = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  let resultSatate = filterReducer(state, {
    type: "SET_END_DATE",
    date: moment(2)
  });
  expect(resultSatate.endDate).toEqual(moment(2));
});

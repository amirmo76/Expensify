import moment from "moment";

const filters = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const altFilters = {
  text: "car",
  sortBy: "amount",
  startDate: moment(0),
  endDate: moment(0).add("5", "days")
};

const altFilters2 = {
  text: "cars",
  sortBy: "amount",
  startDate: moment(0),
  endDate: moment(0).add("5", "days")
};

const altFilters3 = {
  text: "Uber",
  sortBy: "amount",
  startDate: moment(0),
  endDate: moment(0).add("5", "days")
};

export { filters, altFilters, altFilters2, altFilters3 };

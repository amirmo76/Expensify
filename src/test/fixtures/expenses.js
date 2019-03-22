import moment from "moment";

export default [
  {
    id: 1,
    description: "Coffee",
    amount: 500,
    note: "",
    createdAt: moment(0)
      .subtract(2, "days")
      .valueOf()
  },
  {
    id: 2,
    description: "Shirt",
    amount: 2500,
    note: "",
    createdAt: moment(0)
      .subtract(1, "days")
      .valueOf()
  },
  {
    id: 3,
    description: "Uber",
    amount: 300,
    note: "",
    createdAt: moment(0)
      .add(2, "days")
      .valueOf()
  }
];

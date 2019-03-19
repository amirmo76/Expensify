import moment from "moment";

export const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  return expenses
    .filter(cur => {
      const textMatch = cur.description
        .toLowerCase()
        .includes(text.toLowerCase());

      const startDateMatch = startDate
        ? moment(cur.createdAt).isSameOrAfter(startDate)
        : true;

      const endDateMatch = endDate
        ? moment(cur.createdAt).isSameOrBefore(endDate)
        : true;

      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "amount") {
        return b.amount - a.amount;
      }
      return b.createdAt - a.createdAt;
    });
};

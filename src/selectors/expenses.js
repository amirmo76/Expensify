export const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  return expenses
    .filter(cur => {
      const textMatch = cur.description
        .toLowerCase()
        .includes(text.toLowerCase());

      const startDateMatch =
        typeof startDate !== "number" || cur.createdAt >= startDate;

      const endDateMatch =
        typeof endDate !== "number" || cur.createdAt <= endDate;

      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "amount") {
        return b.amount - a.amount;
      }
      return b.createdAt - a.createdAt;
    });
};

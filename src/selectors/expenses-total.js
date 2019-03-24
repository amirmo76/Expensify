export const getExpensesTotal = expenses => {
  return expenses
    .map(cur => cur.amount)
    .reduce((accumulator, cur) => accumulator + cur, 0);
};

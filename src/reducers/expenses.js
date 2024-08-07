// expenses reducer
const defaultExpenses = [];
export default (state = defaultExpenses, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(cur => cur.id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(cur => {
        if (cur.id === action.id) {
          return {
            ...cur,
            ...action.data
          };
        }

        return cur;
      });
    default:
      return state;
  }
};

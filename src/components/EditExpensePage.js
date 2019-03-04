import React from "react";

const EditExpensePage = props => {
  console.log(props.match.params.id);
  return <div>This is from Edit Expense Page</div>;
};

export default EditExpensePage;

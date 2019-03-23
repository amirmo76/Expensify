import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" exact={true} activeClassName="active">
        Dashboad
      </NavLink>
      <NavLink to="/create" activeClassName="active">
        Add Expense
      </NavLink>
    </header>
  );
};

export default Header;

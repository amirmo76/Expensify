import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { addExpense } from "./actions/expenses";
import { editTextFilter } from "./actions/filters";

const store = configureStore();

store.dispatch(addExpense({description: 'bills', amount: 20000}));
store.dispatch(addExpense({description: 'car', amount: 100000}));
store.dispatch(addExpense({description: 'coffe', amount: 2000, createdAt: 20}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));

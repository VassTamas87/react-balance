import React from "react";
import "./App.css";
import Loading from "./Loading";
import Balance from "./Balance";
import NewItem from "./NewItem";
import List from "./List";
import useBalance from "./useBalance";

const App = () => {
  const { list, balance, currency, onSubmit, remove } = useBalance();

  return currency.length < 1 ? (
    <div className="load">
      <Loading />
    </div>
  ) : (
    <div className="container mt-5">
      <div className="row top">
        <NewItem onSubmit={onSubmit} />

        <Balance balance={balance} currency={currency} />
      </div>
      <List list={list} remove={remove} />
    </div>
  );
};

export default App;

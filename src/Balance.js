import React from "react";

const Balance = ({ balance, currency }) => (
  <div className="card col-12 col-md-4 col-lg-4 p-3">
    <h2>Egyenleg</h2>
    <div className={`mt-3 ${balance < 0 ? "neg" : "pos"}`}>
      <h1>{`${Math.abs(balance).toLocaleString().replace(/,/g, " ")} HUF`}</h1>
    </div>

    <div className="currency">
      <div>
        <h4>
          {`${(balance * currency.rates.EUR)
            .toFixed(2)
            .toString()
            .replace(/\./, ",")} EUR`}
        </h4>
      </div>
      <div>
        <h4>
          {`${(balance * currency.rates.USD)
            .toFixed(2)
            .toString()
            .replace(/\./, ",")} USD`}
        </h4>
      </div>
      <div>
        <h4>
          {`${(balance * currency.rates.GBP)
            .toFixed(2)
            .toString()
            .replace(/\./, ",")} GBP`}
        </h4>
      </div>
    </div>
  </div>
);

export default Balance;

import React from "react";
import { Link } from "react-router-dom";

function Dashboard(props) {
  let stockData = props.Stocks.map((d, i) => {
    return (
      <div>
        <Link key={i} to={`/stocks/${d.symbol}`}>
          <li>{d.name}</li>
        </Link>
      </div>
    );
  });
  return <ul>{stockData}</ul>;
}

export default Dashboard;

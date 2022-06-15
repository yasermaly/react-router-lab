import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import About from "./About";
import Stock from "./Stock";
import Stocks from "./Stock-data";

function Main(props) {
  return (
    <main>
      <Route exact path="/" component={Home}>
        <Home />
      </Route>
      <Route path="/about" component={About}>
        <About />
      </Route>
      <Route
        path="/stocks"
        render={(props) => <Dashboard {...props} Stocks={Stocks} />}
      />
      <Route
        path="/stocks/:symbol"
        render={(props) => <Stock Stocks={Stocks} {...props} />}
      />
    </main>
  );
}

export default Main;

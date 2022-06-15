import React from "react";
import stockData from "./components/Stock-data";
import Header from "./components/Header";
import Main from "./components/Main";
// import { withRouter } from 'react-router'

function App(props) {
  return (
    <div>
      <Header />
      <Main stockData={stockData} />
    </div>
  );
}

export default App;

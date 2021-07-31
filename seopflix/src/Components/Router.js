import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";

const Run = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/tv" component={TV} />
    <Route path="/search" component={Search} />
  </Router>
);

export default Run;

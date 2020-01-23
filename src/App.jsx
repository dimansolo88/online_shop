import React from "react";
import Home from "@/Components/Home";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app-wrapper">
      <Route path="/" exact render={() => <Home />} />
      <Route path="/:id" render={() => <div> current product </div>} />
    </div>
  );
};

export default App;

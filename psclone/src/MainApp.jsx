import React from "react";
import ParentComponent from "./Edit";
import ChildComponent from "./Edit2";

const App = () => (
  <ParentComponent>
    <ChildComponent />
  </ParentComponent>
);

export default App;
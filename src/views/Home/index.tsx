import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import { useStores } from "store/usestore";
import { Button } from "antd";

function App() {
  const { commonStore } = useStores();
  const { language } = commonStore;
  console.log("App ~ language", language);

  return (
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;

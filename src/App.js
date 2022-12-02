import React from "react";
import "./App.css";
import Button from "./components/button/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">Click me</Button>
        <Button type="disabled">Disabled</Button>
      </header>
    </div>
  );
}

export default App;

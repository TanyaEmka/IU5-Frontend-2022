import React, { useState } from "react";
import "./App.css";

const Title = () => {
  return (
    <span class="todos">Todos:</span>
  );
};

const CheckBox = ({name}) => {
  return (
    <div class="point">
      <input type="checkbox"></input>
      <span>{name}</span>
    </div>
  );
};

function addCommand() {
  return "New command";
}

const Button = () => {
  return (
    <button onClick={addCommand}>
      <span>Add</span>
    </button>
  );
};

function App() {
  return (
    <div class="card">
      <Title />
      <CheckBox name="Create a lab" />
      <Button />
    </div>
  );
}

export default App;

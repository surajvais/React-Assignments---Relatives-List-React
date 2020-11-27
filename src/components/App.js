import React, { Component, useState } from "react";
import "../styles/App.css";
function App() {
  const relatives = ["Sandhya", "Prakash", "Vipul", "Dk", "Skv"];
  return (
    <div id="main">
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
}
export default App;

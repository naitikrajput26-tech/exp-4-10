import React from "react";
import Student from "./Student";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h2>Student Information</h2>

      <Student name="Naitik rajput" course="Computer Science" marks="95" />
      <Student name="Vani sharma" course="Information Technology" marks="92" />
      <Student name="tushar" course="Electronics" marks="78" />
      
    </div>
  );
}

export default App;
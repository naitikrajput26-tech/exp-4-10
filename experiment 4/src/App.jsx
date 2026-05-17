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

      
      <h4><b>Name: NAITIK RAJPUT</b></h4>
            <h4><b>Addmission no.: 2025B01010719</b></h4>
            <h4><b>Class: CSE 24</b></h4>
    </div>
  );
}

export default App;
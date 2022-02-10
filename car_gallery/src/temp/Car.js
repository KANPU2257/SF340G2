import React from "react";
import "../App.css";

export default function Car({ car }) {
  return (
    <div>
      <h1>{car.title}</h1>
    </div>
  );
}

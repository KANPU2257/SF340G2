import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

function EachCar() {
  const location = useLocation();
  const model = location.state?.model;
  const price = location.state?.price;

  return (
    <div>
      <h1>EachCar</h1>
      <div>{model}</div>
      <div>{price}</div>
    </div>
  );
}

export default EachCar;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Details from "./Details";
export default function Brands() {
  const params = useParams();
  const brand = params.brand;
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars(brand);
  }, []);

  const getCars = (brand) => {
    axios
      .get("http://127.0.0.1:4000/cars/brand/" + brand, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setCars([...cars, ...res.data]);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log("Invalid data");
      });
  };
  return (
    <div>
      <div>{brand}</div>
      {cars.map((data) => {
        return (
          <div>
            <Details obj={data} />
          </div>
        );
      })}
    </div>
  );
}

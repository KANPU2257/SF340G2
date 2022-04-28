import React, { useState } from "react";

export default function Filter(props) {
  const object = props.data;
  const [price, setPrice] = useState(400000);

  const handleInput = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="App">
      <div>{props.data}</div>
      <input
        step={10000}
        max={1000000}
        min={100000}
        type="range"
        onInput={handleInput}
      />
      <h1>Price: {price}</h1>
      {object.map((data) => {
        return <div>{data.price}</div>;
      })}
    </div>
  );
}

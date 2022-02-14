// import React, { useState } from "react";
// import firebase from "../utils/firebase";

// export default function Filter() {
//   const [title, setTitle] = useState("");

//   const handleOnChange = (e) => {
//     setTitle(e.target.value);
//   };
//   const createCar = () => {
//     const carRef = firebase.database().ref("Car");
//     const car = {
//       title,
//       complete: false,
//     };

//     carRef.push(car);
//   };
//   return (
//     <div>
//       <input type="text" onChange={handleOnChange} value={title} />
//       <button className="add-btn" onClick={createCar}>
//         Add Car
//       </button>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import firebase from "../utils/firebase";
// import Car from "./Car";

// export default function CarList() {
//   const [carList, setCarList] = useState();

//   useEffect(() => {
//     const carRef = firebase.database().ref("Car");
//     // listen every time data change in todo ref
//     carRef.on("value", (snapshot) => {
//       const car = snapshot.val();
//       const carList = [];
//       for (let id in car) {
//         carList.push({ id, ...car[id] });
//       }
//       setCarList(carList);
//     });
//   }, []);

//   return (
//     <div>
//       {carList
//         ? carList.map((car, index) => <Car car={car} key={index} />)
//         : ""}
//     </div>
//   );
// }

import React from "react";
import "../App.css";

export default function Car({ car }) {
  return (
    <div>
      <h1>{car.title}</h1>
    </div>
  );
}

// import React from "react";
// import ThemeContext from "./ThemeContext";

// export default function Car() {
//   const id = React.useContext(ThemeContext);
//   return (
//     <div>
//       <div>Car: {id}</div>
//     </div>
//   );
// }

import React from "react";

export default function Data() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getCars();
  }, []);
  const getCars = () => {
    axios
      .get("http://127.0.0.1:4000/cars", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setCars(res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log("Invalid data");
      });
  };
  return <div>Data</div>;
}

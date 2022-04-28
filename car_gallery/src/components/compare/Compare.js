import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./compare.css";

function Compare() {
  const [cars, setCars] = useState([]);
  const defaultSelectValue = "Select a car";
  const [current_id1, setCurrent_id1] = useState("None");
  const [current_id2, setCurrent_id2] = useState("None");

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

  const changeCom1 = (id) => {
    setCurrent_id1(id);
  };

  const changeCom2 = (id) => {
    setCurrent_id2(id);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="topic">หัวข้อ</th>
            <th className="topic1">
              <select
                onChange={(e) => changeCom1(e.target.value)}
                defaultValue={current_id1}
                className="select"
              >
                <option>{defaultSelectValue}</option>
                {cars.map((data) => {
                  return <option value={data._id}>{data.model}</option>;
                })}
              </select>
            </th>
            <th className="topic1">
              <select
                onChange={(e) => changeCom2(e.target.value)}
                defaultValue={current_id2}
                className="select"
              >
                <option>{defaultSelectValue}</option>
                {cars.map((data) => {
                  return <option value={data._id}>{data.model}</option>;
                })}
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>รุ่น</td>
            {cars.map((data) =>
              data._id === current_id1 ? (
                <td>{data.price.toLocaleString("en-US")} บาท</td>
              ) : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? (
                <td>{data.price.toLocaleString("en-US")} บาท</td>
              ) : null
            )}
          </tr>
          <tr>
            <td>ประเภท</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.type}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.type}</td> : null
            )}
          </tr>
          <tr>
            <td>เครื่องยนต์</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.engine}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.engine}</td> : null
            )}
          </tr>
          <tr>
            <td>รายละเอียดเครื่องยนต์</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.engineDetails}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.engineDetails}</td> : null
            )}
          </tr>
          <tr>
            <td>ระบบขับเคลื่อน</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.drivetrain}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.drivetrain}</td> : null
            )}
          </tr>
          <tr>
            <td>ระบบเกียร์</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.transmission}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.transmission}</td> : null
            )}
          </tr>
          <tr>
            <td>เชื้อเพลงที่ใช้ได้</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.fuel}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.fuel}</td> : null
            )}
          </tr>
          <tr>
            <td>ระบบจ่ายน้ำมัน</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.fuelSupplySystem}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.fuelSupplySystem}</td> : null
            )}
          </tr>
          <tr>
            <td>วัสดุหุ้มเบาะ</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.upholsteryMat}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.upholsteryMat}</td> : null
            )}
          </tr>
          <tr>
            <td>เบาะปรับไฟฟ้า</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.elecSeat}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.elecSeat}</td> : null
            )}
          </tr>
          <tr>
            <td>เครื่องเสียง</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.sound}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.sound}</td> : null
            )}
          </tr>
          <tr>
            <td>ระบบเบรค ABS</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.absBreak}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.absBreak}</td> : null
            )}
          </tr>
          <tr>
            <td>Air Bags</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.airBags}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.airBags}</td> : null
            )}
          </tr>
          <tr>
            <td>กระจกไฟฟ้า</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.elecGlass}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.elecGlass}</td> : null
            )}
          </tr>
          <tr>
            <td>อุปกรณ์มาตรฐานภายนอก</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.equipOut}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.equipOut}</td> : null
            )}
          </tr>
          <tr>
            <td>อุปกรณ์มาตรฐานภายใน</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.equipIn}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.equipIn}</td> : null
            )}
          </tr>
          <tr>
            <td>อุปกรณ์มาตรฐานความปลอดภัย</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.equipSec}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.equipSec}</td> : null
            )}
          </tr>
          <tr>
            <td>อุปกรณ์มาตรฐานความสะดวกสบาย</td>
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.equipLivable}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.equipLivable}</td> : null
            )}
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Compare;

{
  /* {cars.map((data) =>
        data.brand === "bmw" ? (
          <div style={{ color: "red" }}>{data.model}</div>
        ) : data.brand === "audi" ? (
          <div>{data.model}</div>
        ) : null
      )} */
}

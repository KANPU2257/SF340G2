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
      <div className="compare">
        <div className="title">
          <h2>Comparison</h2>
        </div>
        <Row>
          <Col>
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

            {cars.map((data) =>
              data._id === current_id1 ? (
                <div>
                  <div className="model">
                    <h5>{data.model}</h5>
                  </div>
                  <div>
                    <img
                      className="img-car"
                      src={data.images.substring(0, data.images.indexOf(","))}
                    />
                  </div>
                  <Table striped bordered hover>
                    <thead>
                      <tr className="topic">
                        <th>หัวข้อ</th>
                        <th>รายละเอียด</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="subtopic">ราคา:</td>
                        <td>{data.price}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">ประเภท:</td>
                        <td>{data.type}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">เครื่องยนต์:</td>
                        <td>{data.engine}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">รายละเอียดเครื่องยนต์:</td>
                        <td>{data.engineDetails}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">ระบบขับเคลื่อน:</td>
                        <td>{data.drivetrain}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">ระบบเกียร์:</td>
                        <td>{data.transmission}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">เชื้อเพลงที่ใช้ได้:</td>
                        <td>{data.fuel}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">ระบบจ่ายน้ำมัน:</td>
                        <td>{data.fuelSupplySystem}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">วัสดุหุ้มเบาะ:</td>
                        <td>{data.upholsteryMat}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">เบาะปรับไฟฟ้า:</td>
                        <td>{data.elecSeat}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">เครื่องเสียง:</td>
                        <td>{data.sound}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">ระบบเบรค ABS:</td>
                        <td>{data.absBreak}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">Air Bags:</td>
                        <td>{data.airBags}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">กระจกไฟฟ้า:</td>
                        <td>{data.elecGlass}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">อุปกรณ์มาตรฐานภายนอก:</td>
                        <td>{data.equipOut}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">อุปกรณ์มาตรฐานภายใน:</td>
                        <td>{data.equipIn}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">อุปกรณ์มาตรฐานความปลอดภัย:</td>
                        <td>{data.equipSec}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">
                          อุปกรณ์มาตรฐานความสะดวกสบาย:
                        </td>
                        <td>{data.equipLivable}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              ) : null
            )}
          </Col>

          <Col>
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

            {/* <h2>Selected: {current_id1}</h2> */}

            {cars.map((data) =>
              data._id === current_id2 ? (
                <div>
                  <div className="model">
                    <h5>{data.model}</h5>
                  </div>
                  <div>
                    <img
                      className="img-car"
                      src={data.images.substring(0, data.images.indexOf(","))}
                    />
                  </div>
                  <Table striped bordered hover>
                    <thead>
                      <tr className="topic">
                        <th>หัวข้อ</th>
                        <th>รายละเอียด</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="subtopic">ราคา:</td>
                        <td>{data.price}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">ประเภท:</td>
                        <td>{data.type}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">เครื่องยนต์:</td>
                        <td>{data.engine}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">รายละเอียดเครื่องยนต์:</td>
                        <td>{data.engineDetails}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">ระบบขับเคลื่อน:</td>
                        <td>{data.drivetrain}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">ระบบเกียร์:</td>
                        <td>{data.transmission}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">เชื้อเพลงที่ใช้ได้:</td>
                        <td>{data.fuel}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">ระบบจ่ายน้ำมัน:</td>
                        <td>{data.fuelSupplySystem}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">วัสดุหุ้มเบาะ:</td>
                        <td>{data.upholsteryMat}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">เบาะปรับไฟฟ้า:</td>
                        <td>{data.elecSeat}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">เครื่องเสียง:</td>
                        <td>{data.sound}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">ระบบเบรค ABS:</td>
                        <td>{data.absBreak}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">Air Bags:</td>
                        <td>{data.airBags}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">กระจกไฟฟ้า:</td>
                        <td>{data.elecGlass}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">อุปกรณ์มาตรฐานภายนอก:</td>
                        <td>{data.equipOut}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">อุปกรณ์มาตรฐานภายใน:</td>
                        <td>{data.equipIn}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">อุปกรณ์มาตรฐานความปลอดภัย:</td>
                        <td>{data.equipSec}</td>
                      </tr>
                      <tr>
                        <td className="subtopic">
                          อุปกรณ์มาตรฐานความสะดวกสบาย:
                        </td>
                        <td>{data.equipLivable}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              ) : null
            )}
          </Col>
        </Row>
      </div>
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

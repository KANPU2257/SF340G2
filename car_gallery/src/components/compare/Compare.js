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
  const defaultSelectValue = "เลือกรถที่ต้องการ";
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
    <div className="compare">
      <h2
        style={{
          color: "#E5E5E5",
          padding: "1%",
          fontFamily: "'Pattaya', sans-serif"
        }}
      >
        Comparsion
      </h2>
      <Table borderless>
        <thead>
          <tr className="topicbar">
            <th className="topic">หัวข้อ</th>
            <th className="topic1">
              <select
                onChange={(e) => changeCom1(e.target.value)}
                defaultValue={current_id1}
                className="select"
              >
                <option selected disabled>
                  {defaultSelectValue}
                </option>
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
                <option selected disabled>
                  {defaultSelectValue}
                </option>
                {cars.map((data) => {
                  return <option value={data._id}>{data.model}</option>;
                })}
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="two">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopicone">ภาพประกอบ</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? (
                <td>
                  <img className="img-car" src={data.images.split(",")[0]} />
                </td>
              ) : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? (
                <td>
                  <img className="img-car" src={data.images.split(",")[0]} />
                </td>
              ) : null
            )}
          </tr>
          <tr className="one">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopictwo">ราคา</div>
              </td>
            ) : null}
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
          <tr className="two">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopicone">ประเภท</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.type}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.type}</td> : null
            )}
          </tr>
          <tr className="one">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopictwo">เครื่องยนต์</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.engine}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.engine}</td> : null
            )}
          </tr>
          <tr className="two">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopicone">รายละเอียดเครื่องยนต์</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.engineDetails}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.engineDetails}</td> : null
            )}
          </tr>
          <tr className="one">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopictwo">ระบบขับเคลื่อน</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.drivetrain}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.drivetrain}</td> : null
            )}
          </tr>
          <tr className="two">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopicone">ระบบเกียร์</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.transmission}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.transmission}</td> : null
            )}
          </tr>
          <tr className="one">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopictwo">เชื้อเพลงที่ใช้ได้</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.fuel}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.fuel}</td> : null
            )}
          </tr>
          <tr className="two">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopicone">ระบบจ่ายน้ำมัน</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.fuelSupplySystem}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.fuelSupplySystem}</td> : null
            )}
          </tr>
          <tr className="one">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopictwo">วัสดุหุ้มเบาะ</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.upholsteryMat}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.upholsteryMat}</td> : null
            )}
          </tr>
          <tr className="two">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopicone">เบาะปรับไฟฟ้า</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.elecSeat}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.elecSeat}</td> : null
            )}
          </tr>
          <tr className="one">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopictwo">เครื่องเสียง</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.sound}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.sound}</td> : null
            )}
          </tr>
          <tr className="two">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopicone">ระบบเบรค ABS</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.absBreak}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.absBreak}</td> : null
            )}
          </tr>
          <tr className="one">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopictwo">Air Bags</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.airBags}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.airBags}</td> : null
            )}
          </tr>
          <tr className="two">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopicone">กระจกไฟฟ้า</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.elecGlass}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.elecGlass}</td> : null
            )}
          </tr>
          <tr className="one">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopictwo">อุปกรณ์มาตรฐานภายนอก</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.equipOut}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.equipOut}</td> : null
            )}
          </tr>
          <tr className="two">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopicone">อุปกรณ์มาตรฐานภายใน</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.equipIn}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.equipIn}</td> : null
            )}
          </tr>
          <tr className="one">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopictwo">อุปกรณ์มาตรฐานความปลอดภัย</div>
              </td>
            ) : null}
            {cars.map((data) =>
              data._id === current_id1 ? <td>{data.equipSec}</td> : null
            )}
            {cars.map((data) =>
              data._id === current_id2 ? <td>{data.equipSec}</td> : null
            )}
          </tr>
          <tr className="two">
            {current_id1 != "None" || current_id2 != "None" ? (
              <td>
                <div className="subtopicone">อุปกรณ์มาตรฐานความสะดวกสบาย</div>
              </td>
            ) : null}
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

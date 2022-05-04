import React from "react";
import { useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarImgSlider from "./CarImgSlider";
import "../css/EachCar.css";

const code1 = "#181818";
const code2 = "#2F2F2F";

export default function EachCar() {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#19191c",
        color: "rgb(197, 196, 199)",
      }}
    >
      <header>
        <div className="overlay">
          <h2>{data.model}</h2>
        </div>
      </header>

      <Row
        style={{
          paddingBottom: "20px",
          paddingTop: "20px",
        }}
      >
        <Col>
          <CarImgSlider
            style={{
              paddingLeft: "80px",
              width: "30%",
              height: "30%",
              padding: "30px",
            }}
            slides={data.images.split(",")}
          ></CarImgSlider>
        </Col>

        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginRight: "1.4%",
          }}
        >
          <div>
            <h5 class="topic">ราคา</h5>
            <p>&emsp;{data.price.toLocaleString("en-US")}&ensp;บาท</p>
          </div>
          <div>
            <h5 class="topic">ประเภท</h5>
            <p>&emsp;{data.type}</p>
          </div>
          <div>
            <h5 class="topic">เครื่องยนต์</h5>
            <p>&emsp;{data.engine}</p>
          </div>
          <div>
            <h5 class="topic">รายละเอียดเครื่องยนต์</h5>
            <p>&emsp;{data.engineDetails}</p>
          </div>
        </Col>
      </Row>
      <Row style={{ width: "100%", paddingBottom: "20px", paddingTop: "20px" }}>
        <Col
          style={{
            display: "flex",
            width: "50%",
            paddingLeft: "80px",
            alignItems: "center",
          }}
        >
          <Row style={{ width: "100%" }}>
            <Col style={{ width: "100%" }}>
              <div>
                <h5 class="topic">ระบบขับเคลื่อน</h5>
                <p>&emsp;{data.drivetrain}</p>
              </div>
              <div>
                <h5 class="topic">ระบบเกียร์</h5>
                <p>&emsp;{data.transmission}</p>
              </div>
              <div>
                <h5 class="topic">เชื้อเพลงที่ใช้ได้</h5>
                <p>&emsp;{data.fuel}</p>
              </div>
            </Col>
            <Col style={{ width: "100%" }}>
              <div>
                <h5 class="topic">ระบบจ่ายน้ำมัน</h5>
                <p>&emsp;{data.fuelSupplySystem}</p>
              </div>
              <div>
                <h5 class="topic">วัสดุหุ้มเบาะ</h5>
                <p>&emsp;{data.upholsteryMat}</p>
              </div>
              <div>
                <h5 class="topic">เบาะปรับไฟฟ้า</h5>
                <p>&emsp;{data.elecSeat}</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          style={{ display: "flex", justifyContent: "center", width: "50%" }}
        >
          <Image
            width="600px"
            height="380px"
            src={data.images.split(",")[1]}
            style={{ borderRadius: 5 }}
          ></Image>
        </Col>
      </Row>

      <Row
        style={{
          paddingBottom: "20px",
          paddingTop: "20px",
        }}
      >
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Image
            width="600px"
            height="380px"
            style={{ borderRadius: 5 }}
            src={data.images.split(",")[2]}
          ></Image>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",

            paddingRight: "80px",
            justifyContent: "center",
          }}
        >
          <div>
            <h5 class="topic">เครื่องเสียง</h5>
            <p>&emsp;{data.sound}</p>
          </div>
          <div>
            <h5 class="topic">ระบบเบรค ABS</h5>
            <p>&emsp;{data.absBreak}</p>
          </div>
          <div>
            <h5 class="topic">Air Bags</h5>
            <p>&emsp;{data.airBags}</p>
          </div>
          <div>
            <h5 class="topic">กระจกไฟฟ้า</h5>
            <p>&emsp;{data.elecGlass}</p>
          </div>
        </Col>
      </Row>

      <Row
        style={{
          paddingTop: "20px",
        }}
      >
        <Col style={{ padding: "30px", backgroundColor: code1 }}>
          <h5>อุปกรณ์มาตรฐานภายนอก</h5>
          <p style={{ textIndent: "50px" }}>&emsp;{data.equipOut}</p>
        </Col>

        <Col
          style={{
            padding: "30px",
            backgroundColor: code2,
          }}
        >
          <h5>อุปกรณ์มาตรฐานภายใน</h5>
          <p style={{ textIndent: "50px" }}>&emsp;{data.equipIn}</p>
        </Col>

        <Col style={{ padding: "30px", backgroundColor: code1 }}>
          <h5>อุปกรณ์มาตรฐานความปลอดภัย</h5>
          <p style={{ textIndent: "50px" }}>&emsp;{data.equipSec}</p>
        </Col>

        <Col
          style={{
            padding: "30px",
            backgroundColor: code2,
          }}
        >
          <h5>อุปกรณ์มาตรฐานความสะดวกสบาย</h5>
          <p style={{ textIndent: "50px" }}>&emsp;{data.equipLivable}</p>
        </Col>
      </Row>
    </div>
  );
}

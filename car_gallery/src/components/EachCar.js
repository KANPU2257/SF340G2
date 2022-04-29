import React from "react";
import { useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarImgSlider from "./CarImgSlider";

export default function EachCar() {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <div style={{ backgroundColor: "white" }}>
      <h2 style={{ textAlign: "center", padding: "20px" }}>{data.model}</h2>
      <Row style={{ width: "100wv" }}>
        <Col style={{ width: "40%", padding: "30px" }}>

          <CarImgSlider slides={data.images.split(",")}></CarImgSlider>
        </Col>

        <Col style={{ width: "30%", padding: "30px", alignItems: "center" }}>
          <div>
            <h4>ราคา</h4>
            <p>&emsp;&emsp;{data.price}&ensp;บาท</p>
          </div>
          <div>
            <h4>ประเภท</h4>
            <p>&emsp;&emsp;{data.type}</p>
          </div>
          <div>
            <h4>เครื่องยนต์</h4>
            <p>&emsp;&emsp;{data.engine}</p>
          </div>
          <div>
            <h4>รายละเอียดเครื่องยนต์</h4>
            <p>&emsp;&emsp;{data.engineDetails}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            display: "flex",
            width: "40%",
            padding: "30px",
            alignItems: "center",
          }}
        >
          <Row style={{}}>
            <Col>
              <div>
                <h5>ระบบขับเคลื่อน</h5>
                <p>&emsp;&emsp;{data.drivetrain}</p>
              </div>
              <div>
                <h5>ระบบเกียร์</h5>
                <p>&emsp;&emsp;{data.transmission}</p>
              </div>
              <div>
                <h5>เชื้อเพลงที่ใช้ได้</h5>
                <p>&emsp;&emsp;{data.fuel}</p>
              </div>
            </Col>
            <Col>
              <div>
                <h5>ระบบจ่ายน้ำมัน</h5>
                <p>&emsp;&emsp;{data.fuelSupplySystem}</p>
              </div>
              <div>
                <h5>วัสดุหุ้มเบาะ</h5>
                <p>&emsp;&emsp;{data.upholsteryMat}</p>
              </div>
              <div>
                <h5>เบาะปรับไฟฟ้า</h5>
                <p>&emsp;&emsp;{data.elecSeat}</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col style={{ width: "40%", padding: "30px" }}>
          <Image
            width="100%"
            height="100%"
            src={data.images.split(",")[1]}
            style={{ borderRadius: 10 }}
          ></Image>
        </Col>
      </Row>

      <Row>
        <Col style={{ width: "40%", padding: "30px" }}>
          <Image
            width="100%"
            height="100%"
            style={{ borderRadius: 10 }}
            src={data.images.split(",")[2]}
          ></Image>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            padding: "30px",
            justifyContent: "center",
          }}
        >
          <div>
            <h4>เครื่องเสียง</h4>
            <p>&emsp;&emsp;{data.sound}</p>
          </div>
          <div>
            <h4>ระบบเบรค ABS</h4>
            <p>&emsp;&emsp;{data.absBreak}</p>
          </div>
          <div>
            <h4>Air Bags</h4>
            <p>&emsp;&emsp;{data.airBags}</p>
          </div>
          <div>
            <h4>กระจกไฟฟ้า</h4>
            <p>&emsp;&emsp;{data.elecGlass}</p>
          </div>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "black", color: "white" }}>
        <Col style={{ padding: "30px" }}>
          <h5 style={{ color: "yellow" }}>อุปกรณ์มาตรฐานภายนอก</h5>
          <span>&emsp;&emsp;{data.equipOut}</span>
        </Col>
        <Col
          style={{ padding: "30px", backgroundColor: "black", color: "white" }}
        >
          <h5 style={{ color: "yellow" }}>อุปกรณ์มาตรฐานภายใน</h5>
          <span>&emsp;&emsp;{data.equipIn}</span>
        </Col>
        <Col style={{ padding: "30px" }}>
          <h5 style={{ color: "yellow" }}>อุปกรณ์มาตรฐานความปลอดภัย</h5>
          <span>&emsp;&emsp;{data.equipSec}</span>
        </Col>
        <Col
          style={{ padding: "30px", backgroundColor: "black", color: "white" }}
        >
          <h5 style={{ color: "yellow" }}>อุปกรณ์มาตรฐานความสะดวกสบาย</h5>
          <span>&emsp;&emsp;{data.equipLivable}</span>
        </Col>
      </Row>
    </div>
  );
}

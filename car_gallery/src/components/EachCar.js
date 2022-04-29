import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarImgSlider from "./CarImgSlider";

function EachCar() {
  const location = useLocation();
  const images = location.state?.images;
  const model = location.state?.model;
  const price = location.state?.price;
  const type = location.state?.type;
  const engine = location.state?.engine;
  const engineDetails = location.state?.engineDetails;
  const drivetrain = location.state?.drivetrain;
  const transmission = location.state?.transmission;
  const fuel = location.state?.fuel;
  const fuelSupplySystem = location.state?.fuelSupplySystem;
  const upholsteryMat = location.state?.upholsteryMat;
  const elecSeat = location.state?.elecSeat;
  const sound = location.state?.sound;
  const absBreak = location.state?.absBreak;
  const airBags = location.state?.airBags;
  const elecGlass = location.state?.elecGlass;
  const equipOut = location.state?.equipOut;
  const equipIn = location.state?.equipIn;
  const equipSec = location.state?.equipSec;
  const equipLivable = location.state?.equipLivable;
  const note = location.state?.note;
  const advice = location.state?.advice;
  const update = location.state?.update;

  console.log("img",images);
  console.log("model",model);
  return (
    <div style={{backgroundColor:"white"}}>
      <h2 style={{ textAlign: "center", padding: "20px" }}>{model}</h2>
      <Row style={{ width: "100wv" }}>
        <Col style={{ width: "40%", padding: "30px" }}>
          {/* <Image
            width="100%"
            height="100%"
            src="https://www.grandprix.co.th/wp-content/uploads/2021/09/%E0%B9%80%E0%B8%88%E0%B8%B2%E0%B8%B0%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94-%E0%B8%A3%E0%B8%96-%E0%B9%80%E0%B8%81%E0%B9%88%E0%B8%87-2020-02-620x420@2x.jpg"
          ></Image> */}
          <CarImgSlider slides={images.split(",")}></CarImgSlider>
        </Col>

        {/* <div>
        <span>รุ่น:</span>
        
      </div> */}
        <Col style={{width: "30%", padding: "30px", alignItems:"center" }}>
          <div>
            <h4>ราคา</h4>
            <p>&emsp;&emsp;{price}&ensp;บาท</p>
          </div>
          <div>
            <h4>ประเภท</h4>
            <p>&emsp;&emsp;{type}</p>
          </div>
          <div>
            <h4>เครื่องยนต์</h4>
            <p>&emsp;&emsp;{engine}</p>
          </div>
          <div>
            <h4>รายละเอียดเครื่องยนต์</h4>
            <p>&emsp;&emsp;{engineDetails}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{display: "flex", width: "40%", padding: "30px" ,alignItems:"center"}}>
          <Row style={{ }}> 
            <Col>
              <div>
                <h5>ระบบขับเคลื่อน</h5>
                <p>&emsp;&emsp;{drivetrain}</p>
              </div>
              <div>
                <h5>ระบบเกียร์</h5>
                <p>&emsp;&emsp;{transmission}</p>
              </div>
              <div>
                <h5>เชื้อเพลงที่ใช้ได้</h5>
                <p>&emsp;&emsp;{fuel}</p>
              </div>
            </Col>
            <Col>
              <div>
                <h5>ระบบจ่ายน้ำมัน</h5>
                <p>&emsp;&emsp;{fuelSupplySystem}</p>
              </div>
              <div>
                <h5>วัสดุหุ้มเบาะ</h5>
                <p>&emsp;&emsp;{upholsteryMat}</p>
              </div>
              <div>
                <h5>เบาะปรับไฟฟ้า</h5>
                <p>&emsp;&emsp;{elecSeat}</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col style={{ width: "40%", padding: "30px" }}>
          <Image
            width="100%"
            height="100%"
            src={images.split(",")[1]}
            style={{borderRadius: 10}}
          ></Image>
        </Col>
      </Row>

      <Row>
        <Col style={{ width: "40%", padding: "30px" }}>
          <Image
            width="100%"
            height="100%"
            style={{borderRadius: 10}}
            src={images.split(",")[2]}
          ></Image>
        </Col>
        <Col style={{ display:"flex", flexDirection:"column", width: "40%", padding: "30px", justifyContent:"center" }}>
          <div>
            <h4>เครื่องเสียง</h4>
            <p>&emsp;&emsp;{sound}</p>
          </div>
          <div>
            <h4>ระบบเบรค ABS</h4>
            <p>&emsp;&emsp;{absBreak}</p>
          </div>
          <div>
            <h4>Air Bags</h4>
            <p>&emsp;&emsp;{airBags}</p>
          </div>
          <div>
            <h4>กระจกไฟฟ้า</h4>
            <p>&emsp;&emsp;{elecGlass}</p>
          </div>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "black", color: "white" }}>
        <Col style={{ padding: "30px" }}>
          <h5 style={{ color: "yellow" }}>อุปกรณ์มาตรฐานภายนอก</h5>
          <span>&emsp;&emsp;{equipOut}</span>
        </Col>
        <Col
          style={{ padding: "30px", backgroundColor: "black", color: "white" }}
        >
          <h5 style={{ color: "yellow" }}>อุปกรณ์มาตรฐานภายใน</h5>
          <span>&emsp;&emsp;{equipIn}</span>
        </Col>
        <Col style={{ padding: "30px" }}>
          <h5 style={{ color: "yellow" }}>อุปกรณ์มาตรฐานความปลอดภัย</h5>
          <span>&emsp;&emsp;{equipSec}</span>
        </Col>
        <Col
          style={{ padding: "30px", backgroundColor: "black", color: "white" }}
        >
          <h5 style={{ color: "yellow" }}>อุปกรณ์มาตรฐานความสะดวกสบาย</h5>
          <span>&emsp;&emsp;{equipLivable}</span>
        </Col>
      </Row>
    </div>
  );
}

export default EachCar;
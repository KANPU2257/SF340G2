import React, { Component } from "react";
import CarImgSlider from "./CarImgSlider";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { useHistory } from "react-router-dom";

export default class DashboardData extends Component {
  // เอาไอดีมาเก็บไว้ในสเตดอีกตัวแปรนึงเพื่อค่าจะได้ไม่เปลี่ยน แล้วค่อยใช้ตัวแปรโกลบอลส่งให้ลูก
  render() {
    const data = this.props.obj;
    console.log(this.props);
    const images = this.props.obj.images.split(",");
    return (
      <div
        style={{
          padding: 10,
          marginBottom: 30, 
          width: "60%",
          backgroundColor: "#420674",
          color: "white",
          borderRadius: 15,
          boxShadow: "3px 3px black",
        }}
      >
        <h1 style={{ textShadow: "2px 2px black" }}>{this.props.obj.model}</h1>
        <CarImgSlider slides={images}></CarImgSlider>
        <h1>แสดงข้อมูลเกี่ยวกับรถ</h1>
        <Link
          to={{
            pathname: "/brand/car/details",
            state: { 
              images: data.images,
              model: data.model, 
              price: data.price,
              type: data.type,
              engine: data.engine,
              engineDetails: data.engineDetails,
              drivetrain: data.drivetrain,
              transmission: data.transmission,
              fuel: data.fuel,
              fuelSupplySystem: data.fuelSupplySystem,
              upholsteryMat: data.upholsteryMat,
              elecSeat: data.elecSeat,
              sound: data.sound,
              absBreak: data.absBreak,
              airBags: data.airBags,
              elecGlass: data.elecGlass,
              equipOut: data.equipOut,
              equipIn: data.equipIn,
              equipSec: data.equipSec,
              equipLivable: data.equipLivable,
              note: data.note,
              advice: data.advice,
              update: data.update,
            },
          }}
        >
          See
        </Link>
      </div>
    );
  }
}
import React, { Component } from "react";
import CarImgSlider from "./CarImgSlider";
import Accordion from "react-bootstrap/Accordion";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

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
            state: { model: data.model, price: data.price },
          }}
        >
          See
        </Link>
      </div>
      // </div>
    );
  }
}

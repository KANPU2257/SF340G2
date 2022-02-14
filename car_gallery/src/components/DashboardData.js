import React, { Component } from "react";
import CarImgSlider from "./CarImgSlider";
export default class DashboardData extends Component {
  // เอาไอดีมาเก็บไว้ในสเตดอีกตัวแปรนึงเพื่อค่าจะได้ไม่เปลี่ยน แล้วค่อยใช้ตัวแปรโกลบอลส่งให้ลูก
  render() {
    console.log(this.props);
    const images = this.props.obj.images.split(",");
    return (
      <div>
        <h1>{this.props.obj.model}</h1>
        <CarImgSlider slides = {images}></CarImgSlider>
      </div>
    );
  }
}
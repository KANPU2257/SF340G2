import React, { Component } from "react";
import CarImgSlider from "./CarImgSlider";
import SimpleDetail from "./SimpleDetail";
export default class DashboardData extends Component {
  // เอาไอดีมาเก็บไว้ในสเตดอีกตัวแปรนึงเพื่อค่าจะได้ไม่เปลี่ยน แล้วค่อยใช้ตัวแปรโกลบอลส่งให้ลูก
  render() {
    console.log(this.props);
    const images = this.props.obj.images.split(",");
    return (
      <div style={{padding:10,marginBottom:30,width:'60%',backgroundColor:'#4600AC',color:'white',borderRadius: 15,boxShadow: '3px 3px black',}}>
        <h1 style={{textShadow:'2px 2px black'}}>{this.props.obj.model}</h1>
        <CarImgSlider slides = {images}></CarImgSlider>
        <SimpleDetail id = {this.props.obj._id}></SimpleDetail>
      </div>
    );
  }
}
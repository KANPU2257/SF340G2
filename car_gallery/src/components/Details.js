import React, { Component } from "react";
import "../css/Details.css";
import DashboardData from "./DashboardData";
export default class Details extends Component {
  render() {
    // console.log(this.props);
    const data = this.props.obj;
    console.log(data);
    return (
      <div class="detail">
        {/* <img src={require('../assets/testImg.jpeg')} alt="img" id="img" class="subDetail"/> */}
        <DashboardData obj={this.props.obj}></DashboardData>
        <div>
          <div id="brand" className="subDetail">
            ยี่ห้อ: {data.brand}
          </div>
          <div id="model" className="subDetail">
            ยี่ห้อ-รุ่น:{data.model}
          </div>
          <div id="price" className="subDetail">
            ราคา: {data.price}
          </div>
          <div id="type" className="subDetail">
            ประเภท: {data.type}
          </div>
          <div id="engine" className="subDetail">
            เครื่องยนต์: {data.engine}
          </div>
          <div id="engineDetails" className="subDetail">
            รายละเอียดเครื่องยนต์: {data.engineDetails}
          </div>
          <div id="propulsionSystem" className="subDetail">
            ระบบขับเคลื่อน: {data.drivetrain}
          </div>
          <div id="gearSystem" className="subDetail">
            ระบบเกียร์: {data.transmission}
          </div>
          <div id="fuelOil" className="subDetail">
            เชื้อเพลิงที่ใช้ได้: {data.fuel}
          </div>
          <div id="fuelOilSystem" className="subDetail">
            ระบบจ่ายน้ำมัน: {data.fuelSupplySystem}
          </div>
          <div id="upholsteryMaterial" className="subDetail">
            วัสดุหุ้มเบาะ: {data.upholsteryMat}
          </div>
          <div id="electricSeat" className="subDetail">
            เบาะปรับไฟฟ้า: {data.elecSeat}
          </div>
          <div id="audio" className="subDetail">
            เครื่องเสียง: {data.sound.split(",").map((d)=>{
              return(
                <h3>{d}</h3>
              )
            })}
          </div>
          <div id="breakSystem" className="subDetail">
            ระบบเบรค ABS: {data.absBreak}
          </div>
          <div id="airBags" className="subDetail">
            Air Bags: {data.airBags}
          </div>
          <div id="electricMirror" className="subDetail">
            กระจกไฟฟ้า: {data.elecGlass}
          </div>
          <div id="externalEquipment" className="subDetail">
            อุปกรณ์มาตรฐานภายนอก: {data.equipOut.split(",").map((d)=>{
              return(
                <h3>{d}</h3>
              )
            })}
          </div>
          <div id="internalEquipment" className="subDetail">
            อุปกรณ์มาตรฐานภายใน: {data.equipIn.split(",").map((d)=>{
              return(
                <h3>{d}</h3>
              )
            })}
          </div>
          <div id="safetyEquipment" className="subDetail">
            อุปกรณ์มาตรฐานความปลอดภัย: {data.equipSec.split(",").map((d)=>{
              return(
                <h3>{d}</h3>
              )
            })}
          </div>
          <div id="comfortEquipment" className="subDetail">
            อุปกรณ์มาตรฐานความสะดวกสบาย: {data.equipSec.split(",").map((d)=>{
              return(
                <h3>{d}</h3>
              )
            })}
          </div>
        </div>

        <div></div>
      </div>
    );
  }
}

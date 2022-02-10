import React, { Component } from "react";
import "../css/Details.css";
export default class Details extends Component {
  render() {
    return (
      <div class="detail">
        <img src={require('../assets/testImg.jpeg')} alt="img" id="img" class="subDetail"/>
        <div id="brand" class="subDetail">ยี่ห้อ:</div>
        <div id="model" class="subDetail">ยี่ห้อ-รุ่น:</div>
        <div id="price" class="subDetail">ราคา:</div>
        <div id="type" class="subDetail">ประเภท:</div>
        <div id="engine" class="subDetail">เครื่องยนต์:</div>
        <div id="detailEngine" class="subDetail">รายละเอียดเครื่องยนต์:</div>
        <div id="propulsionSystem" class="subDetail">ระบบขับเคลื่อน:</div> 
        <div id="gearSystem" class="subDetail">ระบบเกียร์:</div>
        <div id="fuelOil" class="subDetail">เชื้อเพลิงที่ใช้ได้:</div>
        <div id="fuelOilSystem" class="subDetail">ระบบจ่ายน้ำมัน:</div>
        <div id="upholsteryMaterial" class="subDetail">วัสดุหุ้มเบาะ:</div>
        <div id="electricSeat" class="subDetail">เบาะปรับไฟฟ้า:</div>
        <div id="audio" class="subDetail">เครื่องเสียง:</div>
        <div id="breakSystem" class="subDetail">ระบบเบรค ABS:</div>
        <div id="airBags" class="subDetail">Air Bags:</div>
        <div id="electricMirror" class="subDetail">กระจกไฟฟ้า:</div>
        <div id="externalEquipment" class="subDetail">อุปกรณ์มาตรฐานภายนอก:</div>
        <div id="internalEquipment" class="subDetail">อุปกรณ์มาตรฐานภายใน:</div>
        <div id="safetyEquipment" class="subDetail">อุปกรณ์มาตรฐานความปลอดภัย:</div>
        <div id="comfortEquipment" class="subDetail">อุปกรณ์มาตรฐานความสะดวกสบาย:</div>
        <div></div>
      </div>
    );
  }
}

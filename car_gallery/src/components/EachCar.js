import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

function EachCar() {
  const location = useLocation();
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

  return (
    <div>
      <div>
        <span>รุ่น:</span>
        <span>{model}</span>
      </div>
      <div>
        <span>ราคา:</span>
        <span>{price}</span>
      </div>
      <div>
        <span>ประเภท:</span>
        <span>{type}</span>
      </div>
      <div>
        <span>เครื่องยนต์:</span>
        <span>{engine}</span>
      </div>
      <div>
        <span>รายละเอียดเครื่องยนต์:</span>
        <span>{engineDetails}</span>
      </div>
      <div>
        <span>ระบบขับเคลื่อน:</span>
        <span>{drivetrain}</span>
      </div>
      <div>
        <span>ระบบเกียร์:</span>
        <span>{transmission}</span>
      </div>
      <div>
        <span>เชื้อเพลงที่ใช้ได้:</span>
        <span>{fuel}</span>
      </div>
      <div>
        <span>ระบบจ่ายน้ำมัน:</span>
        <span>{fuelSupplySystem}</span>
      </div>
      <div>
        <span>วัสดุหุ้มเบาะ:</span>
        <span>{upholsteryMat}</span>
      </div>
      <div>
        <span>เบาะปรับไฟฟ้า:</span>
        <span>{elecSeat}</span>
      </div>
      <div>
        <span>เครื่องเสียง:</span>
        <span>{sound}</span>
      </div>
      <div>
        <span>ระบบเบรค ABS:</span>
        <span>{absBreak}</span>
      </div>
      <div>
        <span>Air Bags:</span>
        <span>{airBags}</span>
      </div>
      <div>
        <span>กระจกไฟฟ้า:</span>
        <span>{elecGlass}</span>
      </div>
      <div>
        <span>อุปกรณ์มาตรฐานภายนอก:</span>
        <span>{equipOut}</span>
      </div>
      <div>
        <span>อุปกรณ์มาตรฐานภายใน:</span>
        <span>{equipIn}</span>
      </div>
      <div>
        <span>อุปกรณ์มาตรฐานความปลอดภัย:</span>
        <span>{equipSec}</span>
      </div>
      <div>
        <span>อุปกรณ์มาตรฐานความสะดวกสบาย:</span>
        <span>{equipLivable}</span>
      </div>
    </div>
  );
}

export default EachCar;

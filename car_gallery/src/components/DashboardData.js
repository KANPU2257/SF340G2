import React, { Component } from "react";
import CarImgSlider from "./CarImgSlider";
import SimpleDetail from "./SimpleDetail";
import Accordion from "react-bootstrap/Accordion";

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
        {/* <h1 style={{ textShadow: "2px 2px black" }}>{this.props.obj.model}</h1>
        <CarImgSlider slides={images}></CarImgSlider> */}
        {/* <SimpleDetail id={this.props.obj._id}></SimpleDetail> */}
        {/* <div
          style={{
            padding: 10,
            marginBottom: 30,
            width: "60%",
            backgroundColor: "#4600AC",
            color: "white",
            borderRadius: 15,
            boxShadow: "3px 3px black",
          }}
        > */}
        <h1 style={{ textShadow: "2px 2px black" }}>{this.props.obj.model}</h1>
        <CarImgSlider slides={images}></CarImgSlider>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header >แสดงข้อมูลเกี่ยวกับรถ</Accordion.Header>
            <Accordion.Body>
              <div id="subDetail" style={{ color: "black" }}>
                <div id="brand" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>ยี่ห้อ</div>
                <div style={{marginLeft: 10}}>{data.brand}</div>
                <div id="model" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>ยี่ห้อ-รุ่น</div>
                <div style={{marginLeft: 10}}>{data.model}</div>
                <div id="price" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>ราคา</div>
                <div style={{marginLeft: 10}}> {data.price} บาท</div>
                <div id="type" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>ประเภท</div>
                <div style={{marginLeft: 10}}>{data.type}</div>
                <div id="engine" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>เครื่องยนต์</div>
                <div style={{marginLeft: 10}}>{data.engine}</div>
                <div id="engineDetails" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>รายละเอียดเครื่องยนต์</div>
                <div style={{marginLeft: 10}}>{data.engineDetails}</div>
                <div id="propulsionSystem" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>ระบบขับเคลื่อน</div>
                <div style={{marginLeft: 10}}>{data.drivetrain}</div>
                <div id="gearSystem" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>ระบบเกียร์</div>
                <div style={{marginLeft: 10}}>{data.transmission}</div>
                <div id="fuelOil" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>เชื้อเพลิงที่ใช้ได้</div>
                <div style={{marginLeft: 10}}>{data.fuel}</div>
                <div id="fuelOilSystem" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>ระบบจ่ายน้ำมัน</div>
                <div style={{marginLeft: 10}}>{data.fuelSupplySystem}</div>
                <div id="upholsteryMaterial" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>วัสดุหุ้มเบาะ</div>
                <div style={{marginLeft: 10}}>{data.upholsteryMat}</div>
                <div id="electricSeat" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>เบาะปรับไฟฟ้า</div>
                <div style={{marginLeft: 10}}>{data.elecSeat}</div>
                <div id="audio" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>เครื่องเสียง</div>
                <div style={{marginLeft: 10}}>{data.sound}</div>
                <div id="breakSystem" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>ระบบเบรค ABS</div>
                <div style={{marginLeft: 10}}>{data.absBreak}</div>
                <div id="airBags" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>Air Bags</div>
                <div style={{marginLeft: 10}}>{data.airBags}</div>
                <div id="electricMirror" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>กระจกไฟฟ้า</div>
                <div style={{marginLeft: 10}}>{data.elecGlass}</div>
                <div id="externalEquipment" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>อุปกรณ์มาตรฐานภายนอก</div>
                <div style={{marginLeft: 10}}>{data.equipOut}</div>
                <div id="internalEquipment" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>อุปกรณ์มาตรฐานภายใน</div>
                <div style={{marginLeft: 10}}>{data.equipIn}</div>
                <div id="safetyEquipment" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>อุปกรณ์มาตรฐานความปลอดภัย</div>
                <div style={{marginLeft: 10}}>{data.equipSec}</div>
                <div id="comfortEquipment" style={{backgroundColor: "#ddd3e6", padding: 10 , borderRadius: 15,}}>อุปกรณ์มาตรฐานความสะดวกสบาย</div>
                <div style={{marginLeft: 10}}>{data.equipSec}</div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      // </div>
    );
  }
}

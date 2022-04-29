import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./firstpage.css";
import { useHistory } from "react-router-dom";

export default function Firstpage() {
  const history = useHistory();

  const goToCompare = () => {
    let path = `./compare`;
    history.push(path);
  };
   const goToDashboard = () => {
     let path = `./dashboard`;
     history.push(path);
   };


  const mystyle = {
    container: {
      marginTop: "2%",
      width: "95%",
      marginLeft: "2.5%",
    },
    img: {
      color: "#fff",
      fontSize: "1vw",
      // textRransform: "none",
      backgroundRepeat: "no-repeat",
      height: "85vh",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundImage: "url(https://images3.alphacoders.com/940/940360.jpg)",
    },
    content: {
      textAlign: "center",
      height: "60vh",
      paddingTop: "5%",
      paddingBottom: "2%",
      backgroundColor: "rgb(0,7,7,0.8)",
    },
    h2: {
      fontFamily: "'Parisienne', cursive",
      fontSize: "10vw",
      // textRransform: "none",
      marginBottom: "3%",
      color: "rgb(255, 214, 49)",
    },
    Row: {
      marginTop: "2%",
    },
    Col: {
      color: "red",
    },
  };

  return (
    <div style={{ ...mystyle.container }}>
      <div style={{ ...mystyle.img }}>
        <div style={{ ...mystyle.content }}>
          <h2 style={{ ...mystyle.h2 }}>Car Gallery</h2>
          <div>
            ยินดีต้อนรับทุกท่านเข้าสู่เว็บไซต์ Car Gallery
            เว็บไซต์ที่รวมรวมข้อมูลเกี่ยวกับรถยนต์แบรด์ดังไว้มากมาย อาทิเช่น
            ราคา เครื่องยนต์ เชื้อเพลิง ระบบแบรค ระบบเครื่องเสียง
            รวมทั้งอุปกรณ์ด้านความปลอดภัย และหัวข้ออื่น ๆ <br />
            ที่น่าสนใจอีกมากมาย
            และจะเป็นตัวช่วยประกอบการตัดสินใจให้รถในฝันของคุณ
            ภายเว็บไวต์ประกอบไปด้วยฟีเจอร์ที่สามารถอำนวยความสะดวกในการเลือกดูรถไว้อย่างครบครัน
            ไม่ว่าจะเป็น
            <Row style={{ ...mystyle.Row }}>
              <Col style={{ ...mystyle.Col }}>
                <button class="btn-feature" onClick={goToCompare}>
                  ระบบเปรียบเทียบราคารถยนต์
                </button>
              </Col>
              <Col style={{ ...mystyle.Col }}>
                <button class="btn-feature" onClick={goToDashboard}>
                  ระบบเรียงลำดับรถยนต์
                </button>
              </Col>
              <Col style={{ ...mystyle.Col }}>
                <button class="btn-feature" onClick={goToDashboard}>
                  ระบบกรองราคารถยนต์
                </button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

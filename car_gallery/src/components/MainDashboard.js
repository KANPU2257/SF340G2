import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Image,
  Dropdown,
  DropdownButton,
  Card,
  CardGroup,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import { Button } from "bootstrap";
import Sticky from "react-sticky-el";

export default class MainDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],

      brand_state: false,
      filter_state: false,
      brand: "แสดงแบรนด์ทั้งหมด",
      sort: "ไม่เรียงลำดับ",
      filter: "แสดงราคารถทั้งหมด",
      n_noCar: 0,

      max_price: null,
      min_price: null,
    };
  }
  componentDidMount() {
    this.getCar();
  }

  getCar = () => {
    this.state.n_noCar = 0;
    axios
      .get("http://127.0.0.1:4000/cars", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        this.setState({
          cars: res.data,
        });
        console.log(this.state.cars);
      })
      .catch((error) => {
        console.log(error);
        console.log("Invalid data");
      });
  };

  getSort = (e) => {
    this.state.n_noCar = 0;
    var _data = this.state.cars;
    if (e === "1") {
      console.log("ก - ฮ");
      _data.sort((a, b) => a.model.localeCompare(b.model));
      console.log(_data);
      this.setState({ cars: _data, sort: "ก - ฮ" });
    } else if (e === "2") {
      console.log("ฮ - ก");
      _data.sort((a, b) => b.model.localeCompare(a.model));
      console.log(_data);
      this.setState({ cars: _data, sort: "ฮ - ก" });
    } else if (e === "3") {
      console.log("0 - 100");
      _data.sort((a, b) => a.price - b.price);
      console.log(_data);
      this.setState({ cars: _data, sort: "ราคาต่ำสุด - สูงสุด" });
    } else if (e === "4") {
      console.log("100 - 0");
      _data.sort((a, b) => a.price - b.price);
      console.log(_data);
      this.setState({ cars: _data.reverse(), sort: "ราคาสูงสุด - ราคาต่ำสุด" });
    } else if (e === "0") {
      if (this.state.n_noCar !== 0) {
        this.getCar();
      }

      this.setState({ sort: "ไม่เรียงลำดับ" });
    }
  };

  getBrand = (e) => {
    this.state.n_noCar = 0;
    this.setState({ brand_state: true });
    if (e === "1") {
      this.setState({ brand: "bmw" });
    } else if (e === "2") {
      this.setState({ brand: "audi" });
    } else if (e === "3") {
      this.setState({ brand: "aston-martin" });
    } else if (e === "4") {
      this.setState({ brand: "ferrari" });
    } else if (e === "0") {
      this.setState({ brand_state: false, brand: "แสดงแบรนด์ทั้งหมด" });
    }
    console.log(this.state.brand);
  };

  getFilters = (e) => {
    this.state.n_noCar = 0;
    this.setState({ filter_state: true });
    if (e === "1") {
      console.log(e);
      this.setState({
        min_price: 1000000,
        max_price: 10000000,
        filter: "1,000,000 - 10,000,000 บาท",
      });
    } else if (e === "2") {
      console.log(e);
      this.setState({
        min_price: 10000000,
        max_price: 20000000,
        filter: "10,000,000 - 20,000,000 บาท",
      });
    } else if (e === "3") {
      console.log(e);
      this.setState({
        min_price: 20000000,
        max_price: 30000000,
        filter: "20,000,000 - 30,000,000 บาท",
      });
    } else if (e === "4") {
      console.log(e);
      this.setState({
        min_price: 30000000,
        max_price: 100000000,
        filter: "มากกว่า 30,000,000 บาท",
      });
    } else if (e === "0") {
      console.log(e);
      this.setState({
        min_price: 0,
        max_price: 0,
        filter: "แสดงราคารถทั้งหมด",
        filter_state: false,
      });
    }
  };

  no_car = () => {
    return (
      <div
        style={{
          textAlign: "center",
          paddingTop: "10%",
          color: "#a80000",
          fontSize: "26px",
        }}
      >
        <img src="https://img.icons8.com/emoji/48/000000/warning-emoji.png" />
        <> เสียใจด้วย! ตอนนี้ยังไม่มีรถที่ตรงตามความต้องการของคุณ</>
      </div>
    );
  };

  data_card = (res) => {
    const model = res.model;
    const images = res.images;
    const price = res.price;
    console.log(res);
    return (
      <div style={{ width: "30%", marginLeft: "30px" }}>
        <Card
          className="text-center"
          style={{
            width: "100%",
            height: "92%",
            margin: "1vw",
            backgroundColor: "rgba(0, 0, 0, 0.689)",
            // backgroundColor: "rgb(240, 240, 240,0.8)",
            // boxShadow: "2px 2px 1px 0.2px #737373",
            borderRadius: "8px",
          }}
        >
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: "/brand/car/details",
              state: {
                data: res,
              },
            }}
            className="container"
          >
            <Card.Img
              variant="top"
              src={images.split(",")[0]}
              style={{
                height: "25vh",
                width: "100%",
                marginTop: "10px",
                borderRadius: "8px",
              }}
            />
            <Card.Body>
              <Card.Title
                style={{
                  verticalAlign: "baseline",
                  color: "#fe6f01a0",
                  marginBottom: "50px",
                  fontSize: "16px",
                }}
              >
                {model}
              </Card.Title>
              <Card.Footer
                style={{
                  width: "75%",
                  position: "absolute",
                  bottom: "10px",
                  backgroundColor: "rgb(255, 185, 0)",
                  borderRadius: "8px",
                }}
                className="text-muted"
              >
                <div style={{ fontWeight: "bold", color: "#000000" }}>
                  {price.toLocaleString("en-US")} บาท
                </div>
              </Card.Footer>
            </Card.Body>
          </Link>
        </Card>
      </div>
    );
  };

  data = (res) => {
    if (this.state.brand_state === false && this.state.filter_state === false) {
      console.log("Not filter + Sort all time");
      return this.data_card(res);
    } else if (
      this.state.brand_state === true &&
      this.state.filter_state === false
    ) {
      console.log("filtered brands only  + Sort all time");
      if (res.brand === this.state.brand) {
        return this.data_card(res);
      }
    } else if (
      this.state.filter_state === true &&
      this.state.brand_state === true
    ) {
      console.log("Filtered brands and price  + Sort all time");
      this.state.n_noCar++;
      if (
        res.brand === this.state.brand &&
        res.price >= this.state.min_price &&
        res.price <= this.state.max_price
      ) {
        this.state.n_noCar--;
        return this.data_card(res);
      }
      console.log(this.state.n_noCar);
      if (this.state.n_noCar === this.state.cars.length) {
        return this.no_car();
      }
    } else if (this.state.filter_state === true) {
      console.log("Filtered price only  + Sort all time");
      if (
        res.price >= this.state.min_price &&
        res.price <= this.state.max_price
      ) {
        return this.data_card(res);
      }
    }
  };

  render() {
    return (
      <div>
        <Row>
          <Col xs={13} md={9} style={{ marginTop: "20px" }}>
            {/* <Row>{this.data()}</Row> */}
            <Row>
              {this.state.cars.map((res) => {
                return <>{this.data(res)}</>;
              })}
            </Row>
          </Col>
          <Col xs={6} md={3}>
            <Sticky stickyStyle={{ top: "30px"}}>
              <div
                style={{
                  margin: "10%",
                  backgroundColor: "rgba(0, 0, 0, 0.689)",
                  padding: "10px",
                  borderRadius: "8px",
                  paddingTop: "10px",
                  paddingBottom: "1px",
                }}
              >
                <DropdownButton
                  style={{ marginBottom: "5%" }}
                  variant="warning"
                  className="dropdown"
                  id="sorting"
                  title={this.state.sort}
                  onSelect={(e) => this.getSort(e)}
                >
                  <Dropdown.Item eventKey="0">ไม่เรียงลำดับ</Dropdown.Item>
                  <Dropdown.Item eventKey="1">ก - ฮ</Dropdown.Item>
                  <Dropdown.Item eventKey="2">ฮ - ก</Dropdown.Item>
                  <Dropdown.Item eventKey="3">ราคาต่ำ - สูง</Dropdown.Item>
                  <Dropdown.Item eventKey="4">ราคาสูง - ต่ำ</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                  className="dropdown"
                  style={{ marginBottom: "5%" }}
                  variant="warning"
                  id="brand-filter"
                  title={this.state.brand}
                  onSelect={(e) => this.getBrand(e)}
                >
                  <Dropdown.Item eventKey="0">แสดงแบรนด์ทั้งหมด</Dropdown.Item>
                  <Dropdown.Item eventKey="1">bmw</Dropdown.Item>
                  <Dropdown.Item eventKey="2">audi</Dropdown.Item>
                  <Dropdown.Item eventKey="3">aston martin</Dropdown.Item>
                  <Dropdown.Item eventKey="4">ferrari</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                  className="dropdown"
                  style={{ marginBottom: "5%" }}
                  variant="warning"
                  id="brand-filter"
                  title={this.state.filter}
                  onSelect={(e) => this.getFilters(e)}
                >
                  <Dropdown.Item eventKey="0">แสดงราคารถทั้งหมด</Dropdown.Item>
                  <Dropdown.Item eventKey="1">
                    1,000,000 - 10,000,000 บาท
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">
                    10,000,000 - 20,000,000 บาท
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    20,000,000 - 30,000,000 บาท
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">
                    มากว่า 30,000,000 บาท
                  </Dropdown.Item>
                </DropdownButton>

                <Form
                  className="form"
                  style={{
                    marginTop: "10%",
                    color: "rgb(197, 196, 199)",
                  }}
                >
                  <Row className="mb-3">
                    <div style={{ marginBottom: "5%" }}>
                      <b>ค้นหาราคารถอย่างละเอียด</b>
                    </div>
                    <Form.Group as={Col} controlId="name">
                      <Form.Label>ราคาเริ่มต้น</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="หน่วยบาท"
                        value={this.state.min_price}
                        onChange={(e) =>
                          this.setState({
                            min_price: e.target.value,
                            filter_state: true,
                            n_noCar: 0,
                          })
                        }
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="language">
                      <Form.Label>ราคาสิ้นสุด</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="หน่วยบาท"
                        value={this.state.max_price}
                        onChange={(e) =>
                          this.setState({
                            max_price: e.target.value,
                            filter_state: true,
                            n_noCar: 0,
                          })
                        }
                      />
                    </Form.Group>
                    <div>
                      กรุณากรอกข้อมูลราคาเริ่มต้นและราคาสิ้นสุดให้ครบถ้วน
                      <br />
                      <x style={{ color: "#B9B900", textAlign: "left" }}>
                        คำแนะนำ: ราคาเริ่มต้นต้องน้อยกว่าราคาสิ้นสุด
                      </x>
                    </div>
                  </Row>
                </Form>
                {console.log(this.state.min_price)}
              </div>
            </Sticky>
          </Col>
        </Row>
      </div>
    );
  }
}

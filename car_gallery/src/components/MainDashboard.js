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
} from "react-bootstrap";
import { Button } from "bootstrap";
// import "../css/dashboard.css";

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

      max_price: 0,
      min_price: 0,
    };
  }
  componentDidMount() {
    this.getCar();
  }

  getCar = () => {
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
      this.getCar();
      this.setState({ sort: "ไม่เรียงลำดับ" });
    }
  };

  getBrand = (e) => {
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

  data_card = (res) => {
    const model = res.model;
    const images = res.images;
    const price = res.price;
    console.log(res);
    return (
      <div style={{ width: "30%" }}>

      <Card
        className="text-center"
        style={{ width: "20vw", margin: "1vw", backgroundColor: "#DCDCDC" }}
      >
        <Link
        to={{
          pathname: "/brand/car/details",
          state: {
            data: res,
          },
        }}
        className="container">
        <Card.Img
          variant="top"
          src={images.split(",")[0]}
          style={{ height: "25vh", paddingTop: "0.5vw" }}
          />
        <Card.Body>
          <Card.Title style={{ textDecoration: "none" }}>{model}</Card.Title>
          <Card.Footer className="text-muted">
            {price.toLocaleString("en-US")} บาท
          </Card.Footer>
        </Card.Body>
          </Link>
      </Card>
          </div>
    );
  };

  data = (res) => {

      if (
        this.state.brand_state === false &&
        this.state.filter_state === false
      ) {
        return this.data_card(res);
      } else if (
        this.state.brand_state === true &&
        this.state.filter_state === false
      ) {
        if (res.brand === this.state.brand) {
          return this.data_card(res);
        }
      } else if (
        this.state.filter_state === true &&
        this.state.brand_state === true
      ) {
        if (
          res.brand === this.state.brand &&
          res.price >= this.state.min_price &&
          res.price <= this.state.max_price
        ) {
          return this.data_card(res);
        }
      } else if (this.state.filter_state === true) {
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
          <Col xs={13} md={9} >
            {/* <Row>{this.data()}</Row> */}
            <Row >

            {this.state.cars.map((res) => {
              return (
                <>{this.data(res)}</>
                );
              })}
              </Row>
            
          </Col>
          <Col xs={5} md={3} className="menu">
            <div>
              <div>
                <div>Kampoo</div>
                <DropdownButton
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
                {console.log(this.state.min_price)}
                <div></div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

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
} from "react-bootstrap";
import { Button } from "bootstrap";

export default class MainDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],

      brand_state: false,
      filter_state: false,
      brand: "แสดงแบรด์ทั้งหมด",
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
      this.setState({ brand_state: false, brand: "แสดงแบรด์ทั้งหมด" });
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

  data_card = (model, images, price) => {
    return (
      <Card
        className="text-center"
        style={{ width: "20vw", margin: "1vw", backgroundColor: "#DCDCDC" }}
      >
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
      </Card>
    );
  };

  data = () => {
    return this.state.cars.map((res) => {
      if (
        this.state.brand_state === false &&
        this.state.filter_state === false
      ) {
        return this.data_card(res.model, res.images, res.price);
      } else if (
        this.state.brand_state === true &&
        this.state.filter_state === false
      ) {
        if (res.brand === this.state.brand) {
          return this.data_card(res.model, res.images, res.price);
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
          return this.data_card(res.model, res.images, res.price);
        }
      } else if (this.state.filter_state === true) {
        if (
          res.price >= this.state.min_price &&
          res.price <= this.state.max_price
        ) {
          return this.data_card(res.model, res.images, res.price);
        }
      }
    });
  };

  render() {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        <Link
          to={{
            pathname: "/brand/car/details",
            state: {
              //   model: this.props.cars.model,
              //   price: data.price,
              //   type: data.type,
              //   engine: data.engine,
              //   engineDetails: data.engineDetails,
              //   drivertrain: data.drivertrain,
              //   transmission: data.transmission,
              //   fuel: data.fuel,
              //   fuelSupplySystem: data.fuelSupplySystem,
              //   upholsteryMat: data.upholsteryMat,
              //   elecSeat: data.elecSeat,
              //   sound: data.sound,
              //   absBreak: data.absBreak,
              //   airBags: data.airBags,
              //   elecGlass: data.elecGlass,
              //   equipOut: data.equipOut,
              //   equipIn: data.equipIn,
              //   equipSec: data.equipSec,
              //   equipLivable: data.equipLivable,
              //   note: data.note,
              //   advice: data.advice,
              //   update: data.update
            },
          }}
          className="container"
        >
          <Row>{this.data()}</Row>
        </Link>
        <div>
          <div
            style={{
              width: "20vw",
              height: "100vh",
              padding: "20px",
              paddingTop: "10vh",
              backgroundColor: "pink",
              position: "-webkit-sticky",
              position: "sticky",
              top: "0",
            }}
          >
            <div>Kampoo</div>
            <DropdownButton
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
              id="brand-filter"
              title={this.state.brand}
              onSelect={(e) => this.getBrand(e)}
            >
              <Dropdown.Item eventKey="0">แสดงแบรด์ทั้งหมด</Dropdown.Item>
              <Dropdown.Item eventKey="1">bmw</Dropdown.Item>
              <Dropdown.Item eventKey="2">audi</Dropdown.Item>
              <Dropdown.Item eventKey="3">aston martin</Dropdown.Item>
              <Dropdown.Item eventKey="4">ferrari</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
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
              <Dropdown.Item eventKey="4">มากว่า 30,000,000 บาท</Dropdown.Item>
            </DropdownButton>
            {console.log(this.state.min_price)}
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

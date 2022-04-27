import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Image, Dropdown, DropdownButton } from "react-bootstrap";
import { Button } from "bootstrap";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
    };
  }
  componentDidMount() {
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
  }

  data = () => {
    return this.state.cars.map((res) => {
      return (
        <Image
          src={res.images.split(",")[0]}
          style={{
            width: "300px",
            height: "200px",
            margin: "30px"
          }}
        ></Image>
        // <span>{res.model}</span>
      );
    });
  };

  render() {
    return (
      <div style={{ display: "flex" , width:"100%"}}>
        
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
        >
          
          {this.data()}
        </Link>
        <div style={{ width: "20%", padding:"30px", backgroundColor: "pink" }}>
          <DropdownButton id="sorting" title="sort by">
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else</Dropdown.Item>
            <Dropdown.Item href="">Something else</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="brand-filter" title="Brand">
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else</Dropdown.Item>
          </DropdownButton>
          <p>filter</p>
        </div>
      </div>
    );
  }
}

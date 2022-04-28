import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Compare from "./compare/Compare";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brands: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://127.0.0.1:4000/brands", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        this.setState({
          brands: res.data,
        });
        console.log(this.state.brands);
      })
      .catch((error) => {
        console.log(error);
        console.log("Invalid data");
      });
  }

  data = () => {
    return this.state.brands.map((res) => {
      return (
        <Link to={"/brand/" + res.brand}>
          <Image
            style={{
              borderRadius: 15,
              width: "400",
              height: "200",
              boxShadow: "1px 1px 2px 2px grey",
              margin: 10,
              marginLeft: "3%",
            }}
            src={res.logo}
            width="380"
            height="200"
          ></Image>
        </Link>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#ddd3e6",
          alignItems: "center",
        }}
      >
        <div>{this.data()}</div>
        <div><Compare /></div>
      </div>
    );
  }
}
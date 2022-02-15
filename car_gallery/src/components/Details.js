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
        <DashboardData obj={this.props.obj}></DashboardData>
      </div>
    );
  }
}

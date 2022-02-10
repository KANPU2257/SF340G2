import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DashboardData extends Component {
  render() {
    return (
      <div>
        <div>{this.props.obj.price}</div>
      </div>
    );
  }
}

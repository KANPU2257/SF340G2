import React, { Component, useContext, AccordionContext, Card } from "react";
import "../css/Details.css";
import DashboardData from "./DashboardData";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    // console.log(this.props);
    const data = this.props.obj;
    console.log("test" + data);
    return (
      <div class="detail">
        <DashboardData obj={this.props.obj}></DashboardData>
        
      </div>
    );
  }
}

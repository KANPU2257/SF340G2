import React, { Component, useContext, AccordionContext, Card } from "react";
import "../css/Details.css";
import DashboardData from "./DashboardData";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

// function ContextAwareToggle({ children, eventKey, callback }) {
//   const { activeEventKey } = useContext(AccordionContext);

//   const decoratedOnClick = useAccordionButton(
//     eventKey,
//     () => callback && callback(eventKey)
//   );

//   const isCurrentEventKey = activeEventKey === eventKey;

//   return (
//     <button
//       type="button"
//       style={{ backgroundColor: isCurrentEventKey ? "pink" : "lavender" }}
//       onClick={decoratedOnClick}
//     >
//       {children}
//     </button>
//   );
// }

export default class Details extends Component {
  render() {
    // console.log(this.props);
    const data = this.props.obj;
    console.log(data);
    return (
      <div class="detail">
        {/* <Link to={"/DetailOne"}> */}
        <DashboardData obj={this.props.obj}></DashboardData>
        {/* </Link> */}
      </div>
    );
  }
}

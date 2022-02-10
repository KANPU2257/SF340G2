import React, { Component } from "react";
import "../css/Details.css";
export default class Details extends Component {
  render() {
    return (
      <div class="detail">
        <img src={require('../assets/testImg.jpeg')} alt="img" id="img" class="subDetail"/>
        <div id="brand" class="subDetail">brand:</div>
        <div id="model" class="subDetail">model:</div>
        <div id="price" class="subDetail">price:</div>
        <div id="type" class="subDetail">type:</div>
        <div id="engine" class="subDetail">engine:</div>
        <div id="detailEngine" class="subDetail">detail of engine:</div>
        <div id="propulsionSystem" class="subDetail">propulsion system:</div> 
        <div id="gearSystem" class="subDetail">gear system:</div>
        <div id="fuelOil" class="subDetail">fuel oil:</div>
        <div id="fuelOilSystem" class="subDetail">fuel oil system:</div>
        <div id="upholsteryMaterial" class="subDetail">upholstery material:</div>
        <div id="electricSeat" class="subDetail">electric seat:</div>
        <div id="audio" class="subDetail">audio:</div>
        <div id="breakSystem" class="subDetail">break system:</div>
        <div id="airBags" class="subDetail">air bags:</div>
        <div id="electricMirror" class="subDetail">electric mirror:</div>
        <div id="externalEquipment" class="subDetail">external standard equipment:</div>
        <div id="internalEquipment" class="subDetail">internal standard equipment:</div>
        <div id="safetyEquipment" class="subDetail">safety standard equipment:</div>
        <div id="comfortEquipment" class="subDetail">comfort standard equipment:</div>
        <div></div>
      </div>
    );
  }
}

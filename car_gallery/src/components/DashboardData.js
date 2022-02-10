import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DashboardData extends Component {


  render() {
    const images = this.props.obj.images.split(",")
    console.log(images);
    return (
      <div>
        <div>
          <h1>{this.props.obj.model}</h1>
          <h2>{this.props.obj.price}</h2>
          <div>
          {images.map((url) => {
            return(

              <img src={url}></img>
              )
          })}
          </div>
        </div>
      </div>
    );
  }
}

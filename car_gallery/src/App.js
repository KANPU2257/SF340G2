import React from "react";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Brands from "./components/Brands";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EachCar from "./components/EachCar";
import Firstpage from "./components/firstpage/Firstpage";
import Compare from "./components/compare/Compare";
import MainDashboard from "./components/MainDashboard";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar
          className="Navbar"
          bg="black"
          variant="dark"
          sticky="top"
          expand="sm"
          collapseOnSelect
        >
          <Navbar.Brand href="/"> CARGallery</Navbar.Brand>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Firstpage}></Route>
          <Route exact path="/compare" component={Compare}></Route>
          <Route exact path="/dashboard" component={MainDashboard}></Route>
          <Route exact path="/brand/:brand" component={Brands}></Route>
          <Route exact path="/brand/car/details" component={EachCar}></Route>
        </Switch>
      </div>
    </Router>
  );
}

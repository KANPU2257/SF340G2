import React from "react";
// import Dashboard from "./components/Dashboard";
import "./App.css";
import Details from "./components/Details";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <Navbar
        className="Navbar"
        bg="purple"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand>CARGallery</Navbar.Brand>
      </Navbar>
    </div>
  );
}

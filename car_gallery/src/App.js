import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import Car from "./components/Car";
import ThemeContext from "./components/ThemeContext";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Link to="/" style={{ margin: "10px" }}>
              Dashdoard
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route
              path="/car"
              element={
                <ThemeContext.Provider value="เอาไอดีไปไงดีครับ">
                  <Car />
                </ThemeContext.Provider>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

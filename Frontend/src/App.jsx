import { useState } from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}

      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/course" element={ <Courses /> }/>
      </Routes>
    </>
  );
}

export default App;

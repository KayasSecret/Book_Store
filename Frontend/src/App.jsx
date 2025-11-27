import { useState } from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import { Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}

      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/course" element={ <Course /> }/>
      </Routes>
    </>
  );
}

export default App;

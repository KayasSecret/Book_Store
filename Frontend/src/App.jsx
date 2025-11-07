import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FreeBook from "./components/FreeBook";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBook />
      <Card />
      <Footer />
    </>
  );
}

export default App;

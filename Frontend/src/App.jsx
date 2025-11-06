import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FreeBook from "./components/FreeBook";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
    </>
  );
}

export default App;

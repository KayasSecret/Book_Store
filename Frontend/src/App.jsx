import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Footer />
    </>
  );
}

export default App;

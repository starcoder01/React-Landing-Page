import React from "react";
import Roll from "react-reveal/Roll";
import Content from "./Content";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <Roll left>
      <Navbar />
      <MainContent />
      <Content />
      <Footer />
    </Roll>
  );
}

export default HomePage;

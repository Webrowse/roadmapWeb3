import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RoadmapApp from "./components/RoadmapApp";
import React from "react";
import "./App.css";

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex-grow">
      <RoadmapApp />
    </div>
    <Footer />
  </div>
);

export default App;

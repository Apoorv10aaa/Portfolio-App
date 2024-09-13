import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <div id="home" className="bg-[#22311d]">
      <Navbar />
      <Profile />
    </div>
  );
};

export default Home;

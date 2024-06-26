import React, { useState } from "react";
import "./Home.css";
import Container from "../CardContainer/Container";
import ContainerDropDown from "../DropDownContainer/DropDownContainer";
import RightSidebar from "../SidebarRight/RightSidebar";

const Home = () => {
  return (
    <div className="homeScreen">
      <div className="dropdown">
        <ContainerDropDown />
      </div>
      <Container />
    </div>
  );
};

export default Home;

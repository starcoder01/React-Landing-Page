import React from "react";
import "./MainContent.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="image-content">
        <h1>
          <BsFillArrowLeftCircleFill />
        </h1>
        <h1 className="image-text">India: The Country Of Heritage</h1>
        <h1>
          <BsFillArrowRightCircleFill />
        </h1>
      </div>
    </div>
  );
};

export default MainContent;

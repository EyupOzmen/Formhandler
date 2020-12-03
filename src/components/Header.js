import React from "react";
import blackfriday from "../assets/black-friday1.png";

const Header = () => {
  return (
    <div className="image-container">
      <img src={blackfriday} alt="logo" />
      <p>ARAŞTIRMA ANKETİ</p>
    </div>
  );
};
export default Header;

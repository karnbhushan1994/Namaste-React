import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
const Header = () => {
  const [btn, setBtn] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login-btn" onClick={()=>{btn == "login"?setBtn("Logout"):setBtn("login")}}>{btn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";

import useUserOnlineStatus from "../utils/onlineStatus";


const Header = () => {
  const [btn, setBtn] = useState("login");

  const isOnline = useUserOnlineStatus();
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
        <li className="online-status">
      <span className={`status-dot ${isOnline ? "online" : "offline"}`}></span>
    </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
          <button className="login-btn" onClick={()=>{btn == "login"?setBtn("Logout"):setBtn("login")}}>{btn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

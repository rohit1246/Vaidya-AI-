import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"

export const Home = () => {
  
  return (
    <>
        <img className="logo" src={logo} alt=""/>
        <button className="SOS">SOS</button>
    <br/><br/>
    <center><p className="select">Select Your Language</p></center>
    <ul className="choices">
        <li><Link to={"/auth/"}><button className="lang">English</button></Link></li>
        <li><button className="lang">हिंदी</button></li>
        <li><button className="lang">বাংলা</button></li>
        <li><button className="lang">தமிழ்</button></li>
        <li><button className="lang">मराठी</button></li>
        <li><button className="lang">తెలుగు</button></li>
    </ul>
    </>
  );
};

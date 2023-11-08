import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import logo from "./logo.png";
import scanner from "./scanner.png";
import qrcode from "./qrcode.png";
import scanner0 from "./scanner0.gif";
import scanner1 from "./scanner1.gif";
import qrcode0 from "./qrcode0.gif";
import qrcode1 from "./qrcode1.gif";

export const Auth = () => {
    useEffect(() => {
        setTimeout(() =>{
            window.location.replace('http://localhost:1234/loading/');
        },7000);
    },[]);
    return(
        <>
        <img src={logo} alt="" className="top_left"/>
        <Link to={"/home/"}><a className="cancel">cancel</a></Link><br/>
        <div className="classes">
            <div className="class1">
                <img src={qrcode1} alt="" className="image" />
                <p className="text-place qr">Please place finger<br/>on scanner</p>
            </div>
            
            <div className="class2">
            <img  src={scanner1} className="image" />
                <p className="text-place finger">Please place Aadhaar<br/> QR code on scanner</p>
            </div>
        </div>
        </>
    );
} 
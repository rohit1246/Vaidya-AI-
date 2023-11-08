import React from "react";
import core from "./core.png";
import spiral from "./spiral.png";
import { useState,useEffect } from "react";
import tick from "./tick.png";
import cross from "./cross.png";
import { Auth } from "./Auth.js";
import { Link } from "react-router-dom";
export const Loading = () => {
    const [loading,setLoading] = useState(0);
    useEffect(() =>{
        setTimeout(() => {
            if(loading==0) setLoading(1);
            if(loading == -1) window.location.replace('http://localhost:1234/auth/');
            if(loading == 1) window.location.replace('http://localhost:1234/options/');
        },3000)
    },[loading])
    if(loading==0){
        return(
            <div className="ldiv1">
            <div className="ldiv2">
                <div className="ldiv3">
                    <img src={spiral} alt="" className="spiral" />
                    <img src={core} alt="" className="core" />
                </div>
            </div>

        </div>
        );
        }
        else if (loading==1){
            return(
                <div className="tdiv1">

                <div className="container">
                    <div className="image-container">
                        <img src={tick} alt="" className="image"/>
                    </div>
                    <div className="text-container">
                        <div className="tdiv2">
                            Welcome User
                        </div>
                    </div>
                </div>
            </div>
        
            );
        }
        else if (loading==-1){
            return(
                <>
                <div className="fdiv1">
                <div className="fcontainer">
                    <div class="fimage-container">
                        <br/>
                        <br/>
                        <img src={cross} alt="" className="fimage"/>
                    </div>
                    <div className="ftext-container">
                        <div
                            className="fdiv2">
                            Please Try again
                        </div>
                    </div>
                </div>
            </div>
            </>
            )
        }
        
    return (
        <>
        <p>null</p>
        </>
    );
}
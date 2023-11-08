import React from 'react'
import logo from "./logo.png"
import { Link } from 'react-router-dom'
const Option = () => {
  return (
    <>
    <img src={logo} alt=""/>
        <Link to="/home/"><button className="logout">logout</button></Link>
    <br/><br/>
    <center><p className="select">Select an Option</p></center>
    <ul className="choices">
        <li><button>Diagnosis</button></li>
        <li><button>Health Record</button></li>
        <li><button>Regular Checkup</button></li>
        <li><button>Health Plan</button></li>

    </ul>
    </>
  )
}

export default Option

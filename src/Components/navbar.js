import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import Button from 'react-bootstrap/Button';
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdLiveHelp } from "react-icons/md";
function NavBar(){
    let navigate = useNavigate();
    return (
        <div className="Navbar">
            <div className="infoBar">
                <div className="iconHolder" onClick={() => { navigate("/customercare");  }}>
                    
                        <FaUserAlt  style={{ color: "black", width: "20px", height: "20px" }} />
                   

                </div>

                <div className="iconHolder" onClick={() => { navigate("/customercare");  }}>
                    
                    <MdLiveHelp style={{ color: "black", width: "20px", height: "20px" }} />
               

            </div>

            </div>
            <div className="selectBar">
            <ul className="navbar-ul">
                <form>
                    <li className="navbar-li">
                        <div className="select">
                            <div className="label">
                                <label className="navbar-label">Country</label>
                            </div>
                            
                            <div className="selectContent">   
                                <select className="navbar-select" style={{color:"rgb(163, 163, 167)"}}>
                                        <option className="navbar-option" value="India">India</option>
                                        <option className="navbar-option" value="SL">Sri lanka</option>
                                        <option className="navbar-option" selected value="Bhutan">Bhutan</option>
                                        <option className="navbar-option" value="uae">UAE</option>
                                </select>
                            </div>
                        </div>
                        
                    </li>
                    
                        <li className="navbar-li">
                        <div className="icon-div">
                            <MdOutlineKeyboardArrowRight style={{ color: "black", width: "20px", height: "20px" }} />
                            </div>
                        </li>
                    

                    <li className="navbar-li">
                    <div className="select">
                            <div className="label">
                                <label className="navbar-label">State</label>  
                            </div>
                            
                            <div className="selectContent">   
                                <select  className="navbar-select" style={{color:"rgb(163, 163, 167)"}}>
                                        <option className="navbar-option" value="TN">Tamilnadu</option>
                                        <option className="navbar-option" value="MH">Maharastra</option>
                                        <option className="navbar-option" selected value="ND">New delhi</option>
                                        <option className="navbar-option" value="UP">Uttar pradesh</option>
                                </select>
                            </div>
                        </div>
                    </li>

                    <li className="navbar-li">
                    <div className="icon-div">
                        <MdOutlineKeyboardArrowRight style={{ color: "black", width: "20px", height: "20px" }} />
                    </div>
                    </li>

                    <li className="navbar-li">
                    <div className="select">
                            <div className="label">
                                <label className="navbar-label">Customer</label>  
                            </div>
                            
                            <div className="selectContent">  
                                <select className="navbar-select" style={{color:"rgb(163, 163, 167)"}}>
                                        <option className="navbar-option" value="Vedanta">Vedanta</option>
                                        <option className="navbar-option" value="LT">L&T</option>
                                        <option className="navbar-option" selected value="spic">Spic</option>
                                        <option className="navbar-option" value="ssipcot">SIPCOT</option>
                                </select>
                            </div>
                        </div>
                            
                            
                    </li>

                    <li className="navbar-li">
                    <div className="icon-div">
                        <MdOutlineKeyboardArrowRight style={{ color: "black", width: "20px", height: "20px" }} />
                    </div>
                    </li>


                    <li className="navbar-li">
                    <div className="select">
                            <div className="label">
                                <label className="navbar-label">Plant</label>  
                            </div>
                            
                            <div className="selectContent">  
                                <select className="navbar-select" style={{color:"rgb(163, 163, 167)"}}>
                                        <option className="navbar-option" value="BAK45">BAK-45</option>
                                        <option className="navbar-option" value="s506">Sector-506</option>
                                        <option className="navbar-option" selected value="s789">Sector-789</option>
                                        <option className="navbar-option" value="s5">Sector 5</option>
                                </select>
                            </div>
                        </div>
                    </li>

                    <li className="navbar-li">
                    <div className="icon-div">
                        <MdOutlineKeyboardArrowRight style={{ color: "black", width: "20px", height: "20px" }} />
                    </div>
                    </li>


                    <li className="navbar-li">
                    <div className="select">
                            <div className="label">
                                <label className="navbar-label">Machine</label>  
                            </div>
                            
                            <div className="selectContent">
                                <select className="navbar-select" style={{color:"rgb(163, 163, 167)"}}>
                                        <option className="navbar-option" value="q45">QUADRPLE-45</option>
                                        <option className="navbar-option" value="ex">EIGENBOT-x</option>
                                        <option className="navbar-option" selected value="et">Eigenoid-3</option>
                                        <option className="navbar-option" value="m77">MK77</option>
                                </select>
                                </div>
                        </div>
                    </li>
                </form>

            </ul>
            </div>
        </div>
    )
}
export default NavBar;
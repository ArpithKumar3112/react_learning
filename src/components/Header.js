import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header=()=>{
    //const btnName="Login"
    const [btnNamereact,toggleBtnNameReact]=useState("Login");
    const onlineStatus=useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="/logo.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status :{onlineStatus?"✅":"🔴"}</li>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        (btnNamereact==="Login")?toggleBtnNameReact("Logout"):toggleBtnNameReact("Login");
                    }}>{btnNamereact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
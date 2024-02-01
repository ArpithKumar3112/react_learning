import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/USerContext";
import { useSelector } from "react-redux";

const Header=()=>{
    //const btnName="Login"
    const [btnNamereact,toggleBtnNameReact]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const data=useContext(UserContext);
    
    //Subscribing to the store using Selector
    const cartItems=useSelector((store)=>store.cart.items)

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2 px-2 sm:bg-yellow-100 lg:bg-blue-100">
            <div className="logo-container">
                <img className="w-56" src="*/*/logo.png"/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                  <li className="px-4">Online Status :{onlineStatus?"✅":"🔴"}</li>
                    <li className="px-4">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <button className="login" onClick={()=>{
                        (btnNamereact==="Login")?toggleBtnNameReact("Logout"):toggleBtnNameReact("Login");
                    }}>{btnNamereact}</button>
                    <li className="px-4">
                        <Link to="/cart">Cart ({cartItems.length} Items)</Link>
                    </li>
                    {/* <li>{data.loggedInUser}</li> */}
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;
import { useState } from "react";


const User=()=>{

    const[count,setCount]=useState(0);
    return (
    <div className="user-card">
        <h2>Name:Arpith</h2>
        <h3>Location:Bangalore</h3>
        <h4>Contact:@arpith3112</h4>
    </div>
    );        
}

export default User;
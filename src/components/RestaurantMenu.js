import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu=()=>{
    //const[resInfo,setResInfo]=useState(null);
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    // useEffect(()=>{
    //    fetchMenu();  
    // },[]);

    // const fetchMenu=async()=>{ 
    //     const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.942643&lng=77.582947&restaurantId="+resId);
    //     const json=await data.json();
    //     //console.log(json);
    //     setResInfo(json.data);
    // };

    if(resInfo===null) return <Shimmer/>;
    //Only after 
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(itemCards)
    return(
        <div className="menu">
           <h1>{name}</h1>
           <p>{cuisines.join(", ")}</p>
           <h3>{costForTwoMessage}</h3>
           <h2>Menu</h2>
           <ul>
            {itemCards.map((item)=>(
                <li key={item.card.info.id}>{item.card.info.name}- Rs.{item.card.info.price}</li>
            ))}
            </ul> 
        </div>
    );
};

export default RestaurantMenu;
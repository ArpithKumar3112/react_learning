import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useGetIconQuery } from "../../utils/rtkApi";
import { current } from "@reduxjs/toolkit";

const RestaurantMenu=()=>{
    const[resInfo,setResInfo]=useState(null);
    const[showIndex,setShowIndex]=useState(null);
    const {resId}=useParams();
   //const resInfo=useRestaurantMenu(resId);
    useEffect(()=>{
        fetchMenu();  
     },[]);
     //const{data,error,isLoading}=useGetIconQuery(resId);
     //console.log("rktApi:"+current.data)
    const fetchMenu=async()=>{ 
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.942643&lng=77.582947&restaurantId="+resId);
        const json=await data.json();
        //console.log(json);
        setResInfo(json.data);
    };

    if(resInfo===null) return <Shimmer/>;
    //Only after 
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    //console.log(categories[0]);

    return(
        <div className="menu text-center">
           <h1 className="font-bold my-6 text-2xl">{name}</h1>
           <p className="font-bold text-lg">
            {cuisines.join(", ")}-{costForTwoMessage}
           </p>
           {categories.map((c,index)=>(
            //controlled COmponent
            <RestaurantCategory 
            key={c?.card?.card.title} 
            data={c?.card?.card}
            showItems={index===showIndex &&true}
            setShowIndex={()=>setShowIndex(index)}/>
           ))}
        </div>
    );
};

export default RestaurantMenu;
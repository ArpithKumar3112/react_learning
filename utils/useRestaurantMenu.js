import { useEffect, useState } from "react";
const useRestaurantMenu=(resId)=>{
    const[resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    })
    const fetchMenu=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.942643&lng=77.582947&restaurantId="+resId);
        const json=await data.json();
        //console.log(json);
        setResInfo(json.data);
    };

    return resInfo;
}

export default useRestaurantMenu;
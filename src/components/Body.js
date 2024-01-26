import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body=()=>{
    //Local State Variable
    const [listOfRestaurants,setListofRestaurants]=useState([]);
    const [filteredRestaurants,setfilteredRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    console.log("Body Render");
    useEffect(()=>{
       fetchData();
    },[]);
    const fetchData=async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.943042&lng=77.58763&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        //console.log(json);
        //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name)
        setListofRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setfilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    const onlineStatus=useOnlineStatus();

    if(onlineStatus===false){
        return(
            <h1>Please check your Internet connection.You are offline</h1>
        );
    }
   

   return listOfRestaurants.length===0?
        (
        <Shimmer/>
        ):
        (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                        setfilteredRestaurants(listOfRestaurants.filter((restaurant)=>restaurant.info.name.toLowerCase().includes
                        (searchText.toLowerCase())));
                        
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=listOfRestaurants.filter(
                        (res)=>res.info.avgRating>4.4
                    );
                    setfilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant)=>(
                    <Link to ={"/restaurants/"+restaurant.info.id}><RestaurantCard key = {restaurant.info.id} resName={restaurant.info.name} cuisine="Biryani" stars={restaurant.info.avgRating} image ={restaurant.info.cloudinaryImageId} time={restaurant.info.sla.deliveryTime}/></Link>
                    //<RestaurantCard></RestaurantCard>
                ))}
            </div>
        </div>
    )
}

export default Body;
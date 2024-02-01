import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState,useEffect, useContext } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/USerContext";

const Body=()=>{
    //Local State Variable
    const [listOfRestaurants,setListofRestaurants]=useState([]);
    const [filteredRestaurants,setfilteredRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);//Higher Order Component
    console.log("Body Render");
    useEffect(()=>{
       fetchData();
    },[]);
    const fetchData=async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.943042&lng=77.58763&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        //console.log(json);
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setListofRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setfilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    const onlineStatus=useOnlineStatus();

    if(onlineStatus===false){
        return(
            <h1>Please check your Internet connection.You are offline</h1>
        );
    }
   
    const{loggedInUser,setUserName}=useContext(UserContext);

   return listOfRestaurants.length===0?
        (
        <Shimmer/>
        ):
        (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" data-testid="searchInput" className="border border-solid shadow-md border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button 
                    className="px-4 py-2 bg-pink-600 m-4 rounded-lg"
                    onClick={()=>{
                        setfilteredRestaurants(listOfRestaurants.filter((restaurant)=>restaurant.info.name.toLowerCase().includes
                        (searchText.toLowerCase())));
                        
                    }}>search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-pink-600 m-4 rounded-lg" onClick={()=>{
                    const filteredList=listOfRestaurants.filter(
                        (res)=>res.info.avgRating>4.4
                    );
                    setfilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
                </div>

                {/* <div className="search m-4 p-4 flex items-center">
                    <label>User Name </label>
                    <input className="border border-black p-4" value={loggedInUser} onChange={(e)=>{
                        setUserName(e.target.value)
                    }}/>
                </div> */}
                
            </div>
            <div className="flex flex-wrap rounded-lg">
                {filteredRestaurants.map((restaurant)=>(
                    <Link to ={"/restaurants/"+restaurant.info.id}>
                           
                            {restaurant.info.avgRating>4.4?(<RestaurantCardPromoted key = {restaurant.info.id}  resName={restaurant.info.name} cuisine="Biryani" stars={restaurant.info.avgRating} image ={restaurant.info.cloudinaryImageId} time={restaurant.info.sla.deliveryTime}/>):(<RestaurantCard key = {restaurant.info.id}  resName={restaurant.info.name} cuisine="Biryani" stars={restaurant.info.avgRating} image ={restaurant.info.cloudinaryImageId} time={restaurant.info.sla.deliveryTime}/>)}
                        </Link>
                    //<RestaurantCard></RestaurantCard>
                ))}
            </div>
        </div>
    )
}

export default Body;
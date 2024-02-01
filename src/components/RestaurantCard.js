import { LOGO_URL } from "../../utils/constants";

const styleCard={
    backgroundColor:"#f0f0f0"
}

const RestaurantCard=(props)=>{
    //console.log("RestaurantCard Prop");
    //console.log(props);
    return(
        <div data-testid="resCard" className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200" >
            <img className="res-logo rounded-lg " alt="res-img" src={LOGO_URL+props.image}></img>
            <h3 className="font-bold py-4 text-lg">{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.stars} stars</h4>
            <h4>{props.time}minutes</h4>
        </div>
    )
}

//Higher Order Component
// input -Restaurant Card==>Restaurant Card Promoted

export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg ">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    } 
} 
export default RestaurantCard;

//simport { LOGO_URL } from "../../utils/constants";

import { LOGO_URL } from "../../utils/constants";

const styleCard={
    backgroundColor:"#f0f0f0"
}

const RestaurantCard=(props)=>{
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-img" src={LOGO_URL+props.image}></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.stars} stars</h4>
            <h4>{props.time}minutes</h4>
        </div>
    )
}

export default RestaurantCard;

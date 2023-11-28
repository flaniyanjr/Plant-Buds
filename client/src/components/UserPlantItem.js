import React from "react";

function UserPlantItem({name, image, nickname, water, extraInfo, size, owner, location}) {
    return(
        <div className="plant-card">
            <div className="image-container">
                <img src={image} alt={name} className= "plant-img"/>
            </div>
            <div className="plant-info">
                <h4 className="plant-name"> {name} ({nickname})</h4>
                <p className= "card-text water-text"> Watering details: {water}</p>
                <p className= "card-text extraInfo-text"> Additional plant details: {extraInfo}</p>
                <p className= "card-text size-text"> Size of your plant: {size}</p>
                <p className= "card-text owner-text"> Owner: {owner}</p>
                <p className= "card-text location-text"> This plant lives in {owner}'s {location}'</p>
            </div>
        </div>
    ); 
}

export default UserPlantItem;
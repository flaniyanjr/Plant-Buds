import { useState } from "react"

function PlantCard({id, name, image, nickname, water, extraInfo, size, ownerName, location}) {

    
    return (
        <div className="card">
            <h2>{ownerName}'s {name}</h2>
            <img className= "plant-image" src={image} alt={name} sizes= 'auto'/>
        </div>
    )
}

export default PlantCard;


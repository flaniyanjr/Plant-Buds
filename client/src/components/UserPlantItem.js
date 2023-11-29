import React from "react";
import { useOutletContext } from "react-router-dom";

function UserPlantItem({name, image, nickname, water, extraInfo, size, ownerName, location, id}) {

    const {deletePlant} = useOutletContext()

    function handleDelete() {
        fetch(`/plants/${id}`, {
            method: 'DELETE'
        })
        deletePlant(id)
    }
    
    return(
        <div className="user_card">
            <div className="image-container">
                <img src={image} alt={name} className= "plant-image"/>
            </div>
            <div>
                <h4> {name} ({nickname})</h4>
                <p> Watering details: {water}</p>
                <p> Additional plant details: {extraInfo}</p>
                <p> Size of your plant: {size}</p>
                <p> Owner: {ownerName}</p>
                <p> This plant lives in {ownerName}'s {location}</p>
                <button onClick= {handleDelete}> Delete </button>
            </div>
        </div>
    ); 
}

export default UserPlantItem;
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom"
import PlantCard from "./PlantCard";

function PlantLibrary(){

    const {allPlantItems}= useOutletContext()

    // render plant library items
    const renderPlantItems = allPlantItems.map((plant) => (
        <PlantCard 
        key={plant.id}
        name={plant.name}
        image={plant.image}
        nickname={plant.nickname}
        water={plant.water}
        extraInfo={plant.extra_info}
        size={plant.size}
        ownerName={plant.owner.name}
        location={plant.location.room}
        />
    ))


    // display
    return (
        <div>
            <h1 className= 'title'>Plant Library</h1>
            <div className='container' >
                {renderPlantItems}
            </div>
        </div>
    )
}

export default PlantLibrary;
import { useEffect, useState } from "react";
import PlantLibraryItem from "./PlantLibraryItem";

function PlantLibrary( allPlantItems ){

    // render plant library items
    const renderPlantItems = allPlantItems.map((item) => (
        <PlantLibraryItem 
        key={item.id}
        name={item.name}
        image={item.image}
        nickname={item.nickname}
        water={item.water}
        extraInfo={item.extra_info}
        size={item.size}
        ownerName={item.owner.name}
        location={item.location.room}
        />
    ))


    // display
    return (
        <div>
            <h2>Plant Library</h2>
            <div className="plant-library" >
                {renderPlantItems}
            </div>
        </div>
    )
}

export default PlantLibrary;
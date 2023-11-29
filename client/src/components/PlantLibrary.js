import { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import OwnerCard from "./OwnerCard";
import { useOutletContext } from "react-router-dom"

function PlantLibrary(){

    const {allPlantItems}= useOutletContext()
    const {allOwnersItems}= useOutletContext()

    console.log(allOwnersItems)

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

    const renderOwnerItems = allOwnersItems.map((owner)=>(
        <OwnerCard 
        name={owner.name}
        />
    ))


    // display
    return (
        <div>
            <h1 className= 'title'>Plant Library</h1>
            <div className='container' >
                {renderPlantItems}
            </div>
            <div> {renderOwnerItems}</div>

        </div>
    )
}

export default PlantLibrary;
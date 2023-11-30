import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom"
import PlantCard from "./PlantCard";
import OwnerCard from "./OwnerCard";

function PlantLibrary(){

    const {allPlantItems, allOwnersItems}= useOutletContext();
    // console.log(allOwnersItems)
    const [selectedOwner, setSelectedOwner] = useState(null);

    const handleOwnerClick = (ownerId) => {
        // console.log(ownerId)
        setSelectedOwner(ownerId);
    };

    const filteredPlantItems = allPlantItems.filter((plant) => {
        // console.log('Plant Owner ID:', plant.owner.name);
            return selectedOwner === null || plant.owner.name === selectedOwner;
        }
    );

    // render plant library items
    const renderPlantItems = filteredPlantItems.map((plant) => (
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
        key= {owner.id}
        name={owner.name}
        onClick= {handleOwnerClick}
        />
    ));

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
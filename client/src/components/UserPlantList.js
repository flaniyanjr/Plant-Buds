import React from "react";
import NewPlantForm from "./NewPlantForm";
import UserPlantItem from "./UserPlantItem";
import { useOutletContext } from "react-router-dom"

function UserPlantList() {

    const {userPlants} = useOutletContext()

    const renderUserPlants= userPlants.map(plant => (
        <UserPlantItem
        key={plant.id}
        id= {plant.id}
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

    return (
        <div className= "form-container">
            <h1 className= 'title'>Your Plants</h1>
            <NewPlantForm />
            <div>{renderUserPlants}</div>
        </div>
    ) 
}

export default UserPlantList;
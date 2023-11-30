import React from "react";
import { useOutletContext } from "react-router-dom" 
import { useEffect, useState } from "react";

function NewPlantForm(){

    const {addPlant}= useOutletContext()

    const initialState= {
        name: "",
        nickname: "",
        image: "",
        water: "",
        size: "",
        extra_info: "",
        location_id: 2,
        owner_id: 1,
    }

    const [plantData, setPlantData]= useState(initialState)

    function handleChange(e) {
        setPlantData(current => {
            return {
                ...current, [e.target.name] : e.target.value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/plants', {
            method: "POST",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({...plantData})
        })
        .then((r) => r.json())
        .then((newPlant) => addPlant(newPlant))
        e.target.reset()
    }

    return (
        <div className= "new-plant-form">
            <h4>🌼🌿Add a plant to your collection🌱🌷</h4>
            <form id="new-plant-form" onSubmit= {handleSubmit}>
                <div>
                    <label>Plant Type:</label>
                    <input type= "text" name= "name" onChange={handleChange} value= {plantData.name}/>
                </div>
                <div>
                    <label>Nickname:</label>
                    <input type= "text" name= "nickname" onChange={handleChange} value={plantData.nickname}/>
                </div>
                <div>
                    <label>Image:</label>
                    <input type= "text" name= "image" onChange={handleChange} value={plantData.image}/>
                </div>
                <div>
                    <label>Watering:</label>
                    <input type= "text" name= "water" onChange={handleChange} value={plantData.water}/>
                </div>
                <div>
                    <label>Size:</label>
                    <select id="dropdown" onChange={handleChange}>
                        <option value="seedling">Seedling</option>
                        <option value="extra small">Extra Small</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="extra large">Extra Large</option>
                    </select>
                </div>
                <div>
                    <label>Extra care info:</label>
                    <input type= "text" name= "extra_info" onChange={handleChange} value={plantData.extra_info}/>
                </div>
                <div>
                    <label>Where is this plant located in your home:</label>
                    <input type= "text" name= "location_id" onChange={handleChange} value= {plantData.location_id}/>
                </div>
                <div>
                    <label>What is your name:</label>
                    <input type= "text" name= "owner_id" onChange={handleChange} value={plantData.owner_id}/>
                </div>
                <button type= 'submit'> Submit </button>
            </form>
        </div>
    );
}

export default NewPlantForm;
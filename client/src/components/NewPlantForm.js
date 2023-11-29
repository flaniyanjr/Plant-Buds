import React from "react";
import { useOutletContext } from "react-router-dom" 
import { useEffect, useState } from "react";

function NewPlantForm(){

    const {addPlant}= useOutletContext()

    const initialState= {
        name: "",
        nickname: "",
        picture: "",
        water: "",
        size: "",
        extra_care: "",
        location: 2,
        owner: 1,
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
    }

    return (
        <div className= "new-plant-form">
            <h4>🌼🌿Add a plant to your collection🌱🌷</h4>
            <form id="new-plant-form" onSubmit= {handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type= "text" name= "name" onChange={handleChange} value= {name}/>
                </div>
                <div>
                    <label>Nickname:</label>
                    <input type= "text" name= "nickname" onChange={handleChange} value={nickname}/>
                </div>
                <div>
                    <label>Picture:</label>
                    <input type= "text" name= "image" onChange={handleChange} value={picture}/>
                </div>
                <div>
                    <label>Watering:</label>
                    <input type= "text" name= "water" onChange={handleChange} value={water}/>
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
                    <input type= "text" name= "extaInfo" onChange={handleChange} value={extra_care}/>
                </div>
                <div>
                    <label>Where is this plant located in your home:</label>
                    <input type= "text" name= "location" onChange={handleChange} value= {location}/>
                </div>
                <div>
                    <label>What is your name:</label>
                    <input type= "text" name= "owner" onChange={handleChange} value={owner}/>
                </div>
                <button type= 'submit'> Submit </button>
            </form>
        </div>
    );
}

export default NewPlantForm;
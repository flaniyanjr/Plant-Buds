import React from "react";

function NewPlantForm(){
    return (
        <div className= "new-plant-form">
            <h4>🌼🌿Add a plant to your collection🌱🌷</h4>
            <form id="new-plant-form">
                <div>
                    <label>Name:</label>
                    <input type= "text" name= "name"/>
                </div>
                <div>
                    <label>Nickname:</label>
                    <input type= "text" name= "nickname"/>
                </div>
                <div>
                    <label>Picture:</label>
                    <input type= "image" name= "image"/>
                </div>
                <div>
                    <label>Watering:</label>
                    <input type= "text" name= "water"/>
                </div>
                <div>
                    <label>Size:</label>
                    <select id="dropdown">
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
                    <input type= "text" name= "extaInfo"/>
                </div>
                <div>
                    <label>Where is this plant located in your home:</label>
                    <input type= "text" name= "location"/>
                </div>
                <div>
                    <label>What is your name:</label>
                    <input type= "text" name= "owner"/>
                </div>
            </form>
        </div>
    );
}

export default NewPlantForm;
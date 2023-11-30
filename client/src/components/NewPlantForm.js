import { useOutletContext } from "react-router-dom" 
import { useEffect, useState } from "react";

const initialPlantState = {
    name: "",
    nickname: "",
    image: "",
    water: "",
    size: "",
    extra_info: ""
}

function NewPlantForm() {

    const {
        addPlant,
        addLocation,
        allOwnersItems,
        allLocationItems, 
        setAllLocationItems,
        createdOwner
    } = useOutletContext()

    const [plantData, setPlantData]= useState(initialPlantState)
    const [locationData, setLocationData] = useState({room: ""})

    console.log(plantData)
    console.log(locationData)
  
    function handleChange(e) {
        setPlantData(current => {
            return {
                ...current, 
                [e.target.name] : e.target.value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        addNewPlant()
        e.target.reset()
    }

    function addNewPlant() {
        let locationId
        let hasLocation = false;

        allLocationItems.forEach(location => {
            if (location.room.toLowerCase() === locationData.room) {
                locationId = location.id
                hasLocation = true;
            }
        });

        if (!hasLocation) {
            fetch(`/locations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(locationData)   
            })  .then(r => {
                    if (r.ok) {
                        return r.json()
                    } else {
                        throw Error("New location not made.")
                    }
                })
                .then(newLocation => {
                    
                    addLocation(newLocation)
                    console.log(`New location ${newLocation.room} added with the id of ${newLocation.id}`)

                    locationId = newLocation.id
                    addPlantWithLocation(locationId)
                }) 
                .catch(error => {
                    console.error('Error during location creation:', error);
                });
        } else {
            addPlantWithLocation(locationId)
        }
    }

    function addPlantWithLocation(locationId) {
        let ownerId= 1
        if (createdOwner.id > 1) {
            ownerId= createdOwner.id
        }


        fetch('/plants', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...plantData,
                "location_id": locationId,
                "owner_id": ownerId                
            })   
        })
            .then(r => {
                if (r.ok) {
                    return r.json()
                } else {
                    throw Error("New plant not made.")
                }
            })
            .then(newPlant => {
                addPlant(newPlant)
                console.log(`New plant ${newPlant.name} added with the location id of ${newPlant.location_id}!`)
                setPlantData(initialPlantState)
                setLocationData({room: ""})
            })
    }

    return (                     
        <div className= "new-plant-form">
            <h4>🌼🌿Add a plant to your collection🌱🌷</h4>
            <form id="new-plant-form" onSubmit= {handleSubmit}>
                <div>
                    <label>Plant Name:</label>
                    <input type= "text" name= "nickname" onChange={handleChange} value={plantData.nickname}/>
                </div>
                <div>
                    <label>Plant Scientific Name:</label>
                    <input type= "text" name= "name" onChange={handleChange} value= {plantData.name}/>
                </div>
                <div>
                    <label>Plant Size:</label>
                    <select id="dropdown" name="size" onChange={handleChange} value={plantData.size}>
                        <option value="" disabled>-----</option>
                        <option value="seedling">Seedling</option>
                        <option value="extra small">Extra Small</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="extra large">Extra Large</option>
                    </select>
                </div>
                <div>
                    <label>Plant Location:</label>
                    <input type= "text" name= "room" onChange={(e) => setLocationData({[e.target.name] : e.target.value})} value = {locationData.room}/>
                </div>
                <div>
                    <label>Watering:</label>
                    <input type= "text" name= "water" onChange={handleChange} value={plantData.water}/>
                </div>
                <div>
                    <label>Extra care info:</label>
                    <input type= "text" name= "extra_info" onChange={handleChange} value={plantData.extra_info}/>
                </div>
                <div>
                    <label>Image:</label>
                    <input type= "text" name= "image" onChange={handleChange} value={plantData.image}/>
                </div>
                <button type= 'submit'> Submit </button>
            </form>
        </div>
    );
}

export default NewPlantForm;
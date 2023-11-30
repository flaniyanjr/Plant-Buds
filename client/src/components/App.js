import React, { useEffect, useState } from "react";
import { Switch, Route, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import index from "../styling/index.css"
import myplants from "../styling/myplants.css"

function App() {

    const [allPlantItems, setAllPlantItems] = useState([])
    const [allOwnersItems, setAllOwnersItems] = useState([])
    const [allLocationItems, setAllLocationItems] = useState([])
    const [userPlants, setUserPlants]= useState([])
    
    useEffect(() => {
        fetch("/plants")
            .then((resp) => resp.json())
            .then(setAllPlantItems)
        
        fetch("/users")
            .then((resp)=> resp.json())
            .then(allOwners => setAllOwnersItems(allOwners))    
        
        fetch("/locations")
            .then((resp) => resp.json())
            .then(setAllLocationItems)
    }, []);

    function addPlant(newPlant) {
        setAllPlantItems(current => [...current, newPlant])
        setUserPlants(current => [...current, newPlant])
    }

    function deletePlant(id) {
        const newPlantList= allPlantItems.filter((plantObj) => {
            return plantObj.id !== id
        })
        const newUserPlantList= userPlants.filter((plantObj) => {
            return plantObj.id !== id
        })
        setAllPlantItems(newPlantList)
        setUserPlants(newUserPlantList)
    }

    function updatePlant(newPlant) {
        const newPlantList= allPlantItems.map(plantObj => {
            if (plantObj.id === newPlant.id) {
                return newPlant
            } else {
                return plantObj
            }
        })

        const newUserPlantList = userPlants.map(plantObj => {
            if (plantObj.id === newPlant.id) {
                return newPlant
            } else {
                return plantObj
            }
        })
        setAllPlantItems(newPlantList)
        setUserPlants(newUserPlantList)
    }

    function addOwner(newOwner) {
        setAllOwnersItems(current => [...current, newOwner])
    }
    
    function addLocation(newLocation){
        setAllLocationItems(locations => [...locations, newLocation])
    }

    const context= {
        allPlantItems,
        setAllPlantItems,
        addPlant,
        deletePlant,
        updatePlant,
        allOwnersItems,
        setAllOwnersItems,
        addOwner,
        userPlants,
        setUserPlants,
        allLocationItems,
        setAllLocationItems,
        addLocation
    }

    return (
        <div>
            <Header />
            <Outlet context = {context}/>
            <Footer />
        </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Switch, Route, Outlet } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {

    const [allPlantItems, setAllPlantItems] = useState([])
    const [userPlants, setUserPlants]= useState([])

    useEffect(() => {
        fetch("/plants")
            .then((resp) => resp.json())
            .then(allPlants => setAllPlantItems(allPlants))
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

    
    const [allOwnersItems, setAllOwnersItems] = useState([])
    
    useEffect(()=>{
        fetch("/users")
            .then((resp)=> resp.json())
            .then(allOwners => setAllOwnersItems(allOwners))
    }, []);

    function addOwner(newOwner) {
        setAllOwnersItems(current => [...current, newOwner])
    }
    
    const context= {
        allPlantItems,
        setAllPlantItems,
        addPlant,
        allOwnersItems,
        setAllOwnersItems,
        userPlants,
        setUserPlants,
        addOwner,
        deletePlant
    }


    return (
        <div>
            <Header />
            <Outlet context= {context}/>
            <Footer />
        </div>
  );
}

export default App;

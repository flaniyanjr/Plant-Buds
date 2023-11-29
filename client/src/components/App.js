import React, { useEffect, useState } from "react";
import { Switch, Route, Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const databaseURL = "http://localhost:5555"

function App() {

    const [allPlantItems, setAllPlantItems] = useState([])
    const [userPlants, setUserPlants]= useState([])

    useEffect(() => {
        fetch("/plants")
            .then((resp) => resp.json())
            .then(setAllPlantItems)
    }, []);

    function addPlant(newPlant) {
        setAllPlantItems(current => [...current, newPlant])
        setUserPlants(current => [...current, newPlant])
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
        addOwner
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

import React, { useEffect, useState } from "react";
import { Switch, Route, Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

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
        allOwnersItems,
        setAllOwnersItems,
        userPlants,
        setUserPlants,
        addOwner,
        allLocationItems,
        setAllLocationItems,
        addLocation
    }

    // console.log(allLocationItems)
    // console.log(allPlantItems)

    return (
        <div>
            <Header />
            <Outlet context = {context}/>
            <Footer />
        </div>
  );
}

export default App;

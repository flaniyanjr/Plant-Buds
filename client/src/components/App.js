import React, { useEffect, useState } from "react";
import { Switch, Route, Outlet } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {

    const [allPlantItems, setAllPlantItems] = useState([])

    useEffect(() => {
        fetch("/plants")
            .then((resp) => resp.json())
            .then(allPlants => setAllPlantItems(allPlants))
    }, []);

    function addPlant(newPlant) {
        setAllPlantItems(current => [...current, newPlant])
    }

    
    const [allOwnersItems, setAllOwnersItems] = useState([])
    
    useEffect(()=>{
        fetch("/users")
            .then((resp)=> resp.json())
            .then(allOwners => setAllOwnersItems(allOwners))
    }, []);
    
    const context= {
        allPlantItems,
        setAllPlantItems,
        addPlant,
        allOwnersItems,
        setAllOwnersItems
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

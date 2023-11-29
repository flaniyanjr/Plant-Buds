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

    const context= {
        allPlantItems,
        setAllPlantItems,
        addPlant
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

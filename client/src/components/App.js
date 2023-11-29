import React, { useEffect, useState } from "react";
import { Switch, Route, Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const databaseURL = "http://localhost:5555"

function App() {

    const [allPlantItems, setAllPlantItems] = useState([])

    useEffect(() => {
        fetch("/plants")
            .then((resp) => resp.json())
            .then(setAllPlantItems)
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
            <Outlet context = {context}/>
            <Footer />
        </div>
  );
}

export default App;

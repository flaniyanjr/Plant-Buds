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

    const context= {
        allPlantItems,
        setAllPlantItems
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

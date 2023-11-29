import React, { useEffect, useState } from "react";
import { Outlet, Switch, Route } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const databaseURL = "http://localhost:5555"

function App() {

       // plant library items
       const [allPlantItems, setAllPlantItems] = useState([])

       // fetch plant library data
       useEffect(() => {
           fetch(databaseURL + "/plants")
               .then((resp) => resp.json())
               .then(setAllPlantItems)
       }, []);

       const context = {
        allPlantItems
       }
       
    return (
        <div>
            <Header />
            <NavBar />
            <Outlet context={context}/>
            <Footer />
        </div>
  );
}

export default App;

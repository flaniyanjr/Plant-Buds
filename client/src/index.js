import React from "react";
import App from "./components/App";
import "./index.css";
import ReactDOM from "react-dom/client";
import PlantLibrary from "./components/PlantLibrary";
import UserPlantList from "./components/UserPlantList"
import Homepage from "./components/Homepage"
import PlantInfo from "./components/PlantInfo"
import { createBrowserRouter, RouterProvider} from "react-router-dom"


const router = createBrowserRouter ([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/home",
          element: <Homepage />,
        },
        {
          path: "/plantlibrary",
          element: <PlantLibrary />,
        },
        {
          path: "/myplants",
          element: <UserPlantList />, 
        },
        {
          path: "plant/:id",
          element: <PlantInfo />
        }
      ]
    }
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router= {router}/>
);

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);

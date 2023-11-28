import React from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import PlantLibrary from "./components/PlantLibrary";
import UserPlantList from "./components/UserPlantList />"
import { createBrowserRouter, RouterProvider} from "react-router-dom"


const router = createBrowserRouter ([
    {
      path: "/",
      element: <App/>,
      children: [
            {
              path: "/home",
              element: <App />,
            },
            {
              path: "/plantlibrary",
              element: <PlantLibrary />,
              
            },
            {
              path: "/myplants",
              element: <UserPlantList />,
              
            }
        ]
      }
  ])



const root = ReactDOM.creatRoot(document.getElementById('root'));
root.render(
    <RouterProvider router= {router}/>
);

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);

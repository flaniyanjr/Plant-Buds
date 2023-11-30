import NewUserForm from "./NewUserForm";
import plant1 from "../img/plant1.gif"
import plant2 from "../img/plant2.gif"
import plant3 from "../img/plant3.gif"
import plant4 from "../img/plant4.gif"
import homepage from "../styling/homepage.css"

function HomePage() {
    return(
        <div id="home-container">
            <p> This is the Homepage</p>
            <div className="home-info">
                <img id="plant-img" src={plant3} alt="leafy plant with blue pot"/>
                <p> about us </p>
            </div>
            <div className="home-info">
                <p> see plants </p>
                <img id="plant-img" src={plant1} alt="leafy plant with yellow pot"/>
            </div>
            <div className="home-info">
                <img id="plant-img" src={plant2} alt="leafy plant with purple pot"/>
                <p> <NewUserForm /> </p>
            </div>
        </div>
    )
}


export default HomePage;
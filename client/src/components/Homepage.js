import NewUserForm from "./NewUserForm";
import plant1 from "../img/plant1.gif"
import plant2 from "../img/plant2.gif"
import plant3 from "../img/plant3.gif"
import plant4 from "../img/plant4.gif"
import homepage from "../styling/homepage.css"

function HomePage() {
    return(
        <div id="home-container">
            <div className="home-info">
                <img id="plant-img" src={plant3} alt="leafy plant with blue pot"/>
                <p> Welcome to Plant Buds, the vibrant community where plant enthusiasts unite! At Plant Buds, we believe in the power of greenery to bring joy and connection to our lives. Whether you're a seasoned plant parent or just starting your botanical journey, our platform provides a virtual garden for you to cultivate and share your love for plants. </p>
            </div>
            <div className="home-info">
                <p> Ready to embark on a journey through lush virtual landscapes? Wander through our Plant Library and discover the diverse and vibrant collections of plants curated by our ever-growing community. Immerse yourself in the green symphony as you explore the botanical tales shared by fellow enthusiasts. Discover a plethora of unique foliage, from exotic succulents to majestic ferns. Dive in, and let the foliage feast begin!</p>
                <img id="plant-img" src={plant1} alt="leafy plant with yellow pot"/>
            </div>
            <div className="home-info">
                <img id="plant-img" src={plant2} alt="leafy plant with purple pot"/>
                <p> Cultivate your own digital garden and become a part of our thriving green community.  Share the stories of your botanical friends, from the quirky cacti on your windowsill to the elegant orchids gracing your living room. Let's grow together – sign up now and start sharing the joy of greenery with fellow enthusiasts around the world! <NewUserForm /> </p>
            </div>
        </div>
    )
}


export default HomePage;
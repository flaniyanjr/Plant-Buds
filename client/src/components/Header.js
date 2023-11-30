import banner from "../img/banner.jpg"
import NavBar from './NavBar'
import header from "../styling/header.css"

function Header() {
    return(
        <div id="header">
            <NavBar />
            <img id="header-img" src={banner} alt="plant buds banner"/>
        </div>
    )
}

export default Header;
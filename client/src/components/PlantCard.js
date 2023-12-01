import { useState } from "react"

function PlantCard({id, name, image, nickname, water, extraInfo, size, ownerName, location}) {

    const [showDetails, setShowDetails] = useState(false)

    function handleClick() {
        setShowDetails(current => !current)
    }

    return (
        <div className="card" onClick={handleClick}>
            <h2>{ownerName}'s {name}</h2>
            <img className= "plant-image" src={image} alt={name} sizes= 'auto'/>
            {showDetails ? (
                <div id="card-p">
                    <p>Nickname: {nickname}</p>
                    <p> Watering details: {water}</p>
                    <p> Additional plant details: {extraInfo}</p>
                    <p> Size of your plant: {size}</p>
                    <p> Owner: {ownerName}</p>
                    <p> This plant lives in {ownerName}'s {location}</p>
                </div>
            ) : null}
        </div>
    )
}

export default PlantCard;


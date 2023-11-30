import React from "react";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function UserPlantItem({name, image, nickname, water, extraInfo, size, ownerName, location, id}) {

    const {deletePlant, updatePlant} = useOutletContext()

    const [showButtons, setShowButtons] = useState(false)
    const [newNickname, setNewNickname]= useState('')

    function handleClick() {
        setShowButtons( current => !current )
    }

    function handleDelete() {
        fetch(`/plants/${id}`, {
            method: 'DELETE'
        })
        deletePlant(id)
    }

    function handleNewNickname(e) {
        setNewNickname(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/plants/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({nickname: newNickname})
        })
        .then(r => r.json())
        .then(newPlant => updatePlant(newPlant))
        setNewNickname('')
    }
    
    return(
        <div className="user_card">
            <div className="image-container">
                <img src={image} alt={name} className= "plant-image" onClick= {handleClick}/>
            </div>
            <div>
                <h4> {name} ({nickname})</h4>
                <p> Watering details: {water}</p>
                <p> Additional plant details: {extraInfo}</p>
                <p> Size of your plant: {size}</p>
                <p> Owner: {ownerName}</p>
                <p> This plant lives in {ownerName}'s {location}</p>
                {
                    showButtons ? (
                        <>
                            <form onSubmit={handleSubmit}>
                                <textarea placeholder='Update nickname' name='new_nickname' type= "text" value={newNickname} onChange={handleNewNickname}></textarea>
                                <input className='form-submit' type="submit"></input>
                            </form>
                            <button onClick= {handleDelete} className="join-now"> Delete </button>
                        </>
                    ) : null
                }
            </div>
        </div>
    ); 
}

export default UserPlantItem;
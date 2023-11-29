import React from "react";
import { useOutletContext } from "react-router-dom" 
import { useEffect, useState } from "react";

function NewUserForm(){

    const {addOwner}= useOutletContext()

    const initialState= {
        name: "",
        plants: "",
        locations: ""
    }

    const [ownerData, setOwnerData] = useState(initialState)

    function handleChange(e) {
        setOwnerData(current => {
            return {
                ...current, [e.target.name] : e.target.value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/users', {
            method: "POST",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({...ownerData})
        })
        .then((r)=> r.json())
        .then((newOwner)=> addOwner(newOwner))
    e.target.reset()
    }


return (
    <div className= "new-user-form">
    <h4> Create an account: </h4>
    <form id= "new-user-form" onSubmit= {handleSubmit}>
        <div>
            <label> Name: </label>
            <input type= "text" name="name" onChange= {handleChange} value= {ownerData.name} />
        </div>
        <button type= "submit"> Create user </button>
    </form>
    </div> );
}

export default NewUserForm;
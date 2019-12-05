import React, { useState } from 'react';
import "./TeamForm.css";

const TeamForm = (props) => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const memberChange = event => {
        setMember({
            ...member, [event.target.name]: event.target.value  
        })
    }

    const submitForm = (event) => {
        event.preventDefault()
        props.addNewMember(member)
    }

    return (
        <div>
            <form onSubmit={submitForm} className="form-container">
                <label htmlFor="name">Name:
                <input 
                onChange={memberChange}
                name="name" 
                type="text"/>
                </label>

                <label htmlFor="name">Email:
                <input 
                onChange={memberChange} 
                name="email" 
                type="text"/>
                </label>

                <label htmlFor="name">Role:
                <input 
                onChange={memberChange}
                name="role" 
                type="text"/>
                </label>

                <button type="submit">Add Team Member</button>
            </form>
        </div>
    );
}

export default TeamForm;
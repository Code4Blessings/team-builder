import React, { useState } from 'react';
import "./TeamForm.css";

const TeamForm = (props) => {
    const [teamData, setTeamData] = useState({
        name: '',
        email: '',
        role: ''
    });

    const memberChange = event => {
        setTeamData({
            ...teamData, [event.target.name]: event.target.value  
        })
    }

    return (
        <div>
            <form className="form-container">
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
            </form>
        </div>
    );
}

export default TeamForm;
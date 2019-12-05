import React, { useState } from 'react';
import './App.css';
import TeamForm from './components/TeamForms';
import TeamMembers from './components/TeamMembers';

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      name: 'Robin Warden',
      email: 'robincw35@gmail.com',
      role: 'Front-End Developer'
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamMember([...teamMember, newMember])
  }

  return (
    <div className="App">
    <h1>Team Builder</h1>
      <TeamForm  addNewMember={addNewMember} />
      <TeamMembers teamMember={teamMember} />
    </div>
  );
}

export default App;

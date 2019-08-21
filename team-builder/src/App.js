import React, {useState} from 'react';
import './App.css';

import data from './Components/Data';
import Form from './Components/Form';
import TeamList from './Components/TeamList';


function App() {
  const[members, setMembers] = useState(data);
  const addNewMember = member => {
    setMembers([...members, member]);
  };
  return (
    <div className="App">
      <h1>Team Member List</h1>
      <Form addNewMember = {addNewMember} />
      <TeamList teamList = {members} />
    </div>
  );
}

export default App;

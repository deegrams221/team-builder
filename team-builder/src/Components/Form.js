import React, {useState} from "react";

const Form = (props) => {
  const[member, setMember] = useState({name: "", email: "", role: ""});
  
  const changeHandler = (event) => {
    console.log(event.target.value);
    setMember({...member, [event.target.name]: event.target.value});
  };
  
  const submitForm = (event) => {
    event.preventDefault();
    const newMember = {
      ...member,
      id: Date.now()
    };
    props.addNewMember(newMember);
    setMember({name: "", email: "", role: ""});
  };
  
  return (
    <form onSubmit = {submitForm}>
      <label htmlFor="name">Member name</label>
      <input 
        type="text" 
        name="name" 
        placeholder="Enter member name here:" 
        value={member.name}
        onChange={changeHandler} 
      />
      <label htmlFor="email">Member email</label> 
      <input 
        type="email" 
        name="email" 
        placeholder="Enter member email here:" 
        value={member.email}
        onChange={changeHandler} 
      />
      <label htmlFor="role">Member role</label> 
      <input 
        type="text" 
        name="role" 
        placeholder="Enter member role here:" 
        value={member.role}
        onChange={changeHandler} 
      />
      <button type = "submit">Submit</button>
    </form>
  );
};

export default Form;
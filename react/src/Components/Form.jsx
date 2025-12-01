import {useState} from 'react';

const Form = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handelChange = async(e)=>{ 
       e.preventDefault();
        const response = await fetch("http://localhost:4000/save-form", {
            headers: {"content-type" : "application/json"}, //we have to write header because when we send request to header then to tell the content type.
            method : "POST",
            body : JSON.stringify({email, name, password}), //body is actual data what we rae sending to the server, And Http cannot send direct objects to the server so thats why we need to stringify first before sending.
        })
            const data = await response.json();
    console.log(data);
    alert("Data saved successfully!");
    }
    
  return (
    <div>
        <form className='form' onSubmit = {handelChange}>
            <label>Name</label>
            <input type="text" placeholder='Enter your Email' value={name} onChange = {(e)=>{setName(e.target.value)}}></input>
            <label>Email</label>
            <input type="email" placeholder='Enter your Email' value={email} onChange = {(e)=>{setEmail(e.target.value)}}></input>
            <label>Password</label>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password'></input>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form

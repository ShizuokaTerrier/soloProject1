import React, { useState } from "react";

function CreateAccount(){

    // For creating a new account

    const [username,setUsername]=useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]=useState("");

    // Checking for errors

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handler function 
    
    const handleUsername = (e)=>{
        setUsername(e.target.value);
        setSubmitted(false)
    };

    const handleEmail = (e)=>{
        setEmail(e.target.value);
        setSubmitted(false)
    };

    const handlePassword = (e)=>{
        setPassword(e.targte.value);
        setSubmitted(false);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (username === "" || email === "" || pasword === ""){
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    // error and success messages 

    const errorMessage = () =>{
        return (
            <>
            <div className="error" style={{display: error ? "": "none"}}>
                <h1>Please enter all the fields</h1>
            </div>
            </>
        )
    };

    const successMessage = () =>{
        return (
            <>
            <div className="success" style={{display: submitted ? "": "none"}}>
                <h1>Account created!</h1>
            </div>
            </>
        )
    }







    return (
        <>
        <div>
            <h1>Create an Account</h1>
        </div>
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>

        <form>
            <label className="label">Username</label>
            <input onChange={handleUsername} placeholder="username" className="input" value={username} type="text" />

            <label>Email</label>
            <input onChange={handleEmail} placeholder="email" className="input" value={email}type="text" />

            <label className="label">password</label>
            <input onChange={handlePassword} placeholder="password" className="input" value={password} type="text" />
            <button onClick={handleSubmit} className="btn" type="submit"></button>
        </form>
        </>
    )
};

export default CreateAccount;
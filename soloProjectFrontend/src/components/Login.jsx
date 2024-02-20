import React, { useState } from "react";

function Login({setView}){

    // For logging in 

    const [username,setUsername]=useState("");
    const [password, setPassword]=useState("");

    const [submitted, setSubmitted]=useState();
    const [error,setError]=useState();

    // Handler functions for inputs
    
    const handleUsername = (e)=>{
        setUsername(e.target.value);
        setSubmitted(false)
    };


    const handlePassword = (e)=>{
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const errorMessage = () =>{
        return (
            <>
            <div className="error" style={{display: error ? "": "none"}}>
                <h3>Enter both your username and password.</h3>
            </div>
            </>
        )
    };

    const successMessage = () =>{
        return (
            <>
            <div className="success" style={{display: submitted ? "": "none"}}>
                <h2>You logged in!</h2>
            </div>
            </>
        )
    }
    

    // login to the site 

    async function handleLogin(e){
        e.preventDefault();
        if (username === "" || password === ""){
           
        } else {
            setSubmitted(true);
        }

        const body = {
            username: username,
            password: password
        }

        try {
            console.log("I think I can, I think I can...");
            const result = await fetch("https://soloprojectbackend.onrender.com/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });   
        } catch (error) {
            console.log(error.message)
        }

       
        
    };

    


    return (
        <>
        <div>
            <h3>Login</h3>
        </div>
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>

        <form>
            <label>Username</label>
            <input onChange={handleUsername} placeholder="username" className="input" value={username} type="text" />

            <label>Password</label>
            <input onChange={handlePassword} placeholder="password" className="input" value={password} type="password" />
            <button onClick={handleLogin} className="btn" type="submit">Login</button>
        </form>
        </>
    )
};

export default Login;
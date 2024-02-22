import React, { useState } from "react";


function Login({setView}){

    // For logging in 

    const [username,setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [authenticatedUsername, setAuthenticatedUsername]=useState()

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
                <h3>Something didn't go to plan... </h3>
            </div>
            </>
        )
    };

    const successMessage = () =>{
        return (
            <>
            <div className="success" style={{display: submitted ? "": "none"}}>
                <h2>Hello {username}</h2>
            </div>
            </>
        )
    }
    

    // login to the site 

    async function handleLogin(e){
        e.preventDefault();
        if (username === "" || password === ""){
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    
        const body = {
            username: username,
            password: password
        }

        try {
            console.log("Attempting to login");
            const result = await fetch(`https://soloprojectbackend.onrender.com/login`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });   
            if(result.ok === true) {
                setAuthenticatedUsername(username)
            } else {
                setError(true)
            };
        } catch (error) {
            console.log(error.message)
            
        }

       
        
    };

    


    return (
        <>
        <div className="messages">
            {errorMessage()}
            
        </div>
        {authenticatedUsername === username ?(
            <div>
            {successMessage()}
            <h3>Ready to play?</h3>
            <button onClick={()=>{setView('SAndTh')}}>Practice 'S' & 'Th'</button>
             <button onClick={()=>{setView('LandR')}}>Practice 'L' & 'R'</button>
             <button onClick={()=>{setView('BandP')}}>Practice 'B' & 'P'</button>
             <button onClick={()=>{setView('SyllableCountries')}}>Syllables and Countries</button>
            </div>
             
        ):(
        
        <form>
            <label>Username</label>
            <input onChange={handleUsername} placeholder="username" className="input" value={username} type="text" />

            <label>Password</label>
            <input onChange={handlePassword} placeholder="password" className="input" value={password} type="password" />
            <button onClick={handleLogin}  type="submit">Login</button>
            <button onClick={()=>{setView('CreateAccount')}}>Go Back</button>
        </form>)}
        </>
    )
};

export default Login;
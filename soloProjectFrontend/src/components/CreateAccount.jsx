import React, { useState } from "react";

function CreateAccount({setView}){

    // For creating a new account

    const [username,setUsername]=useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]=useState("");

    // Checking for errors

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handler functions for inputs
    
    const handleUsername = (e)=>{
        setUsername(e.target.value);
        setSubmitted(false)
    };

    const handleEmail = (e)=>{
        setEmail(e.target.value);
        setSubmitted(false)
    };

    const handlePassword = (e)=>{
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // submit to the database 

    async function handleSubmit(e){
        e.preventDefault();
        if (username === "" || email === "" || password === ""){
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }

        const body = {
            username: username, 
            email: email,
            password: password
        }

        try {
            console.log("I'm trying dammit");
            const result = await fetch (`${process.env.API_URL}/user_table`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
        } catch (error) {
            console.log(error.message)
        }

        {setView('Home')}
    };

    // error and success messages 

    const errorMessage = () =>{
        return (
            <>
            <div className="error" style={{display: error ? "": "none"}}>
                <h3>Please enter all the fields</h3>
            </div>
            </>
        )
    };

    const successMessage = () =>{
        return (
            <>
            <div className="success" style={{display: submitted ? "": "none"}}>
                <h2>Account created!</h2>
            </div>
            </>
        )
    }

    return (
        <>
        <div>
            <h3>Create an Account</h3>
        </div>
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>

        <form>
            <label>Username</label>
            <input onChange={handleUsername} placeholder="username" className="input" value={username} type="text" />

            <label>Email</label>
            <input onChange={handleEmail} placeholder="email" className="input" value={email}type="text" />

            <label>Password</label>
            <input onChange={handlePassword} placeholder="password" className="input" value={password} type="password" />
            <button onClick={handleSubmit}  type="submit">Create Account</button>
        </form>

        <div>
            <h3>Already have an account?</h3>
            <button onClick={()=>{setView('Login')}}>Login</button>
        </div>
        </>
    )
};

export default CreateAccount;
import React from "react";

function Home({setView}){



    return (
        <>
        <h3>Welcome Home</h3>
        <button onClick={()=>{setView('SAndTh')}}>Practice 'S' & 'Th'</button>
        <button onClick={()=>{setView('LandR')}}>Practice 'L' & 'R'</button>
        <button onClick={()=>{setView('BandP')}}>Practice 'B' & 'P'</button>
        <button onClick={()=>{setView('CreateAccount')}}>Create an Account</button>
        </>
    )
};

export default Home
import React from "react";

function Home({setView}){



    return (
        <>
        <h3>Welcome Home</h3>
        <button onClick={()=>{setView('sAndTh')}}>Practice 's' and 'th'</button>
        </>
    )
};

export default Home
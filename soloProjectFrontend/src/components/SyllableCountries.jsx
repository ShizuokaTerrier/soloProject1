import React, {useState} from "react";
import { playWord } from "./LandRMinimalPairs";

function SyllableCountries(){
    
    const arrayOfCountries = [
        ["Wales", "1"],
        ["China", "2"],
        ["Nigeria", "4"],
        ["The United States of America", "10"],
        ["Pakistan", "3"],
        ["England", "2"],
        ["Scotland", "2"],
        ["Azerbaijan", "4"],
        ["Italy", "3"]
    ]
    
    const [score, setScore] = useState(0);

    

    function spellingCheck(index, word, e){
        if(word === arrayOfCountries[index][0]){
            let newScore = score + 1;
            setScore(newScore);
            e.target.disabled = true;
        } else {
            console.log("Not Yet");
            console.log(word);
            console.log(arrayOfCountries[index][0]);
        }
    }

    function syllableCountCheck(index, number, e){
        if(number === arrayOfCountries[index][1]){
            let newScore = score + 1;
            setScore(newScore);
            e.target.disabled = true;
        } else {
            console.log(number)
            console.log(arrayOfCountries[index][1])

        }

    }
    
    return (
        <>
        <header>How many syllables?</header>
        <h2>Your current score is {score}</h2>
        <tbody>
            {
                arrayOfCountries.map((item,index)=>{
                    return (
                        <tr key={index}>
                            <div className="syllable-game-container">
                            <button className="play-button" onClick={(e)=>{playWord(item[0])}}>play</button>
                            <input onChange={(e)=>{spellingCheck(index,e.target.value, e)}} type="text" className="text" placeholder="Country" />
                            <input onChange={(e)=>{syllableCountCheck(index,e.target.value, e)}} type="text" className="text" placeholder="Syllable count" />
                            </div>
                            
                        </tr>
                    )
                })
            }
        </tbody>
        </>
    )
}

export default SyllableCountries;
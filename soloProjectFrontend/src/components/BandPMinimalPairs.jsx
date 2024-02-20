import React, { useEffect } from "react";
import { useState } from "react";

function BandPMinimalPairs({setView}){

    const arrayOfPairs = [
    ["Bar", "Pa"],
    ["Bear", "Pear"],
    ["Bill", "Pill"],
    ["Cub","Cup"]
];


const [answer1, setAnswer1] = useState(0);
const [answer2, setAnswer2] = useState(0);
const [answer3, setAnswer3] = useState(0);
const [answer4, setAnswer4] = useState(0);

const [clickCount, setClickCount] = useState(0)

useEffect(()=>{
    setAnswer1(flipACoin);
    setAnswer2(flipACoin);
    setAnswer3(flipACoin);
    setAnswer4(flipACoin);

   
},[])

const [score, setScore] = useState(0);

const answerArray = [answer1,answer2,answer3,answer4];

console.log(answerArray)


function playWord(word){
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
}

function flipACoin(){
    return Math.floor(Math.random() * 2);
} 



function checkAnswerZero(num){
    if(num === 0){ 
        let newScore = score + 1
        setScore(newScore);
        console.log(score)
        let newClickCount = clickCount + 1;
        setClickCount(newClickCount);
        console.log(clickCount);
    } else {
        console.log("wrong answer")
    }
}

function checkAnswerOne(num){
    if(num === 1){
        let newScore = score + 1
        setScore(newScore);
        console.log(score)
        let newClickCount = clickCount + 1;
        setClickCount(newClickCount);
        console.log(clickCount);
    } else {
        console.log("Wrong answer")
    }
}

const body = {score: score};

async function updateScore(){
    try {
        console.log("I'm trying dammit");
        const result = await fetch ("https://soloprojectbackend.onrender.com/scores", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        });
    } catch (error) {
        console.log(error.message)
    }
}

if(clickCount === 4){
    updateScore()
    console.log("I ran the scores to...")
}





    return (
        <>
        <h3>{score}</h3>
        <tbody>
        
        {
        arrayOfPairs.map((item, index) => {
            return (
            <tr key={index}>
            <button className="play-button" onClick={(e)=>{playWord(item[answerArray[index]])}}>Play</button>
            <button onClick={(e)=>{checkAnswerZero(answerArray[index]); e.currentTarget.disabled = true}}>{item[0]}</button>
            <button onClick={(e)=>{checkAnswerOne(answerArray[index]); e.currentTarget.disabled = true}}>{item[1]}</button>
            </tr>)}
        )}
        </tbody>
        <button onClick={(e)=>{setView('Home')}}>Home</button>
        </>
)}

export default BandPMinimalPairs;
import React, { useEffect } from "react";
import { useState } from "react";

function SandTHMinimalPairs(){

    const arrayOfPairs = [
    ["Sick", "Thick"],
    ["Sing", "Thing"],
    ["Sink", "Think"],
    ["Sum","Thumb"]
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

if (clickCount === 3){

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
        <button></button>
        </>
)}

export default SandTHMinimalPairs;
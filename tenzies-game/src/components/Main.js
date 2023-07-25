import React from "react";
import Die from "./Die";
import {nanoid} from 'nanoid'
export default function Main(){
    const [dice,setDice] = React.useState(newDice())
    const [endGame,setEndGame] = React.useState(false)
    const [win,setWin] = React.useState(false)
    const [lose,setLose] = React.useState(false)
    function newDice(){
        const Dice = []
        for (let i=0;i<10;i++){
            Dice.push({
                id : nanoid(),
                value:Math.ceil(Math.random() * 6),
                isHeld:false
            })
        }
        return Dice
    }
    function rollDice(){
        if(endGame){
            setDice(newDice())
            setEndGame(false)
            setWin(false)
            setLose(false)
        }
        else{
            setDice((oldDice) => oldDice.map(die => {
                return die.isHeld?die:{...die,value:Math.floor(Math.random() * 6)}
            }))
        }
    }
    function holdheld(id){
        setDice((oldDice) => oldDice.map(die => {
            return die.id===id ? {...die,isHeld : !die.isHeld} : die
        }))
    }
    React.useEffect(function(){
        let held=true
        let sameValue=true
        for(let i=0;i<10;i++){
            if(dice[i].isHeld===false){
                held=false
            }
        }
        if(held){
            for(let i=1;i<10;i++){
                if(!(dice[i].value===dice[0].value)){
                    sameValue=false
                }
            }
        }
        if(held && !(sameValue)){
            setLose(true)
            setEndGame(true)
        }
        else if(held && sameValue){
            setWin(true)
            setEndGame(true)
        }
    },[dice])
    const diceElement = dice.map((num) => <Die value={num.value} isHeld={num.isHeld} HoldHeld={() => holdheld(num.id)} win={win} lose={lose}/>)
    return(
        <main>
            <div className="game-info">
                <h2>Tenzies</h2>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>
            <div className="dice-container">
                {diceElement}
            </div>
            <button onClick={rollDice}>{endGame?"Reset":"Roll"}</button>
        </main>
    )
}
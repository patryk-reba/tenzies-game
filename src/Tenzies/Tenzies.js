import React from "react"
import Die from "./Die"
import DieNumbers from './DieNumbers'
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import StopWatch from './StopWatch.js'


export default function Tenzies() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(true)
    const [rollsAmount, setRollsAmount] = React.useState(0)
    const [showNumbers, setShowNumbers] = React.useState(true);
    const [confetti, setConfetti] = React.useState(false)
    const [dots, setDots] = React.useState(true)
    function counter() {
        setRollsAmount(prevrollsAmount => prevrollsAmount += 1)
        setDots(false)
    }



    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            timerStart = true
        }

    }, [dice])



    function ChangeShowNumbers() {
        setShowNumbers(!showNumbers)
    }

    function generateNewDie() {

        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
            showNumbers: false
        }
    }

    let timerStart = false

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice


    }

    function rollDice() {
        if (!tenzies) {

            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ?
                    die :
                    generateNewDie()


            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
            setRollsAmount(0)
            setConfetti(true)


        }


        counter()
    }



    function holdDice(id) {
        if (!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.id === id ?
                    { ...die, isHeld: !die.isHeld } :
                    die
            }))

        }
    }

    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
            showNumbers={die.showNumbers}

        />
    ))

    const diceNumbersElements = dice.map(die => (
        <DieNumbers
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
            showNumbers={die.showNumbers}

        />
    ))
    // new game/roll btn is in StopWatch component
    return (
        <main className="tenzi">
            {tenzies && confetti && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same.
                Click each die to freeze it at its current value between rolls.</p>
            {dots ? <button className="btn showButton"
                onClick={ChangeShowNumbers}
            >
                {showNumbers ? "Show Numbers" : "Show Dots"}
            </button> : <h2 className="letsgo">Let's go!</h2>}
            <div className="dice-container">
                {showNumbers ? diceElements : diceNumbersElements}
            </div>

            <div className="counter">Rolls: {rollsAmount}</div>
            <StopWatch isTenzies={tenzies} handleClick={rollDice} />



        </main>
    )
}
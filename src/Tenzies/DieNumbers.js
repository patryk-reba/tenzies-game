import React from "react"

export default function DieNumbers(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "orange"
    }
    return (
        <div 
            className="die-face Die-shaking " 
            style={styles}
            onClick={props.holdDice} 
        >
        {<h2 className="die-num ">{props.value}</h2>}
            
        </div>
    )
}

// showing number value on dices: 
// <h2 className="die-num">{props.value}</h2>
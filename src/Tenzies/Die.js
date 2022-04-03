import React from "react"


export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "orange"
    }
    return (
        <div
            className="die-face Die-shaking "
            style={styles}
            onClick={props.holdDice}
        >
            {props.showNumbers === true && <h2 className="die-num">{props.value}</h2>}
            {props.value === 1 &&
                <div className="dice first-face">
                    <span className="dot"> </span>
                </div>
            }

            {props.value === 2 &&
                <div className="dice second-face">
                    <span className="dot"> </span>
                    <span className="dot dot2"> </span>
                </div>
            }

            {props.value === 3 &&
                <div className="dice third-face second-face ">
                    <span className="dot"></span>
                    <span className="dot "></span>
                    <span className="dot"></span>
                </div>
            }
            {props.value === 4 &&
                <div className="fourth-face dice">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            }

            {props.value === 6 &&
                <div className="fourth-face dice">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            }

            {
                props.value === 5 &&
                <div className="fifth-face dice">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>

                    <div className="column">
                        <span className="dot"></span>
                    </div>

                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            }

        </div>
    )
}

// showing number value on dices: 
// <h2 className="die-num">{props.value}</h2>
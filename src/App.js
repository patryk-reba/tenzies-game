import React from "react"
import Tenzies from "./Tenzies/Tenzies"
import './style.css'


export default function App() {

    // const [game, setGame] = React.useState(true)


    // function tenziesGame() {
    //     setGame(!game)
    // }

    // //    function particlesGame() {
    // //     setParticles(!particles)

    // // }

    const styles = {
        backgroundColor: "yellow",
        color: "black"
    }

    return (
        <div className="front-page">
            {/* <h1 className="choseGame">Choose Game</h1>
            <div className="choose-app-buttons"> */}
            {/* {
                    game ? <button className="btn app-btn" style={styles} onClick={tenziesGame}                >tenzies</button> :
                        <button className="btn app-btn" onClick={tenziesGame}>tenzies</button>
                } */}

            <Tenzies />

            {/* <button className="btn app-btn"  onClick={particlesGame}>particles</button> */}
        </div>

        // { game && <Tenzies /> }




        // </div >
    )

}

//  {game ? <Tenzies /> : <BkParticles />}
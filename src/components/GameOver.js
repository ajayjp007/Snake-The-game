import React from "react"
import Button from "./Button"
import "./GameOver.css"

const GameOver = () => {
    const restartGame = () => {
        return window.location.reload(true)
    }

    return (
        <div className="game-over-conatiner">
            <p id="game-over">GAME OVER</p>
            <Button onClick={restartGame}>Restart</Button>
        </div>
    )
}


export default GameOver
import Board from "./components/Board"
import React, { useState } from "react"
import Button from "./components/Button"
import GameOver from "./components/GameOver"

//each time the snake eats an apple increase its body by  1

const App = () => {
    let playerScore = 0
    let previousApple = []
    let initialDirection = "down"
    let startPos = "1-4"
    let arr = undefined
    let storeBodyId = ["1-1", "1-2", "1-3", "1-4"]
    let count = 0

    const [startGame, setStartGame] = useState(false)
    const [gameOver, setGameOver] = useState(false)

    const renderBoard = () => {
        setStartGame(true)
    }

    const restartGame = () => {
        setStartGame(false)
    }


    if (startGame === true) {
        const appleGen = () => {

            setInterval(() => {
                if (previousApple.length > 0) {
                    document.getElementById(previousApple[0] + '-' + previousApple[1]).style.backgroundColor = "#19181A"

                    previousApple.pop()
                    previousApple.pop()
                }
                let num1 = Math.floor(Math.random() * 19 + 1)
                let num2 = Math.floor(Math.random() * 19 + 1)


                let newApple = document.getElementById(num1 + '-' + num2)

                previousApple.push(num1)
                previousApple.push(num2)

                newApple.style.backgroundColor = "#AFD275"

            }, 7000)
        }

        appleGen()

        let headPos = startPos.split('-')
        headPos[0] = parseInt(headPos[0])
        headPos[1] = parseInt(headPos[1])

        setInterval((direction) => {
            if (count === 1) {
                storeBodyId.reverse()
            }


            for (let i = 0; i < storeBodyId.length; i++) {
                document.getElementById(storeBodyId[i]).style.backgroundColor = "white"
            }


            direction = initialDirection
            if (direction === "down") {
                headPos[1] += 1
            } else if (direction === "up") {
                headPos[1] -= 1
            } else if (direction === "left") {
                headPos[0] -= 1
            } else if (direction === "right") {
                headPos[0] += 1
            }

            let str = headPos[0] + '-' + headPos[1]
            document.getElementById(str).style.backgroundColor = "#E1AD01"

            storeBodyId.push(str)
            storeBodyId.reverse()
            count = 1
            document.getElementById(storeBodyId[storeBodyId.length - 1]).style.backgroundColor = "#19181A"


            arr = storeBodyId[storeBodyId.length - 1]
            storeBodyId.pop()

            checkIfSnakeAteApple(storeBodyId[0], arr)
            checkIfsnakeHitWall(storeBodyId[0])
            snakeAteItself(storeBodyId[0])
            
            playerScore++
            document.getElementById("score").innerText = playerScore


        }, 250)


        const checkIfSnakeAteApple = (snakePosition, arr) => {
            let x = snakePosition.split('-')
            x[0] = parseInt(x[0])
            x[1] = parseInt(x[1])

            if (x[0] === previousApple[0] && x[1] === previousApple[1]) {
                playerScore += 150
                storeBodyId.push(arr)
            }
        }


        window.addEventListener("keydown", (e) => {
            e.preventDefault();
            let direction = initialDirection
            if (e.keyCode === 37 && direction !== "right") {
                initialDirection = "left"
            } else if (e.keyCode === 39 && direction !== "left") {
                initialDirection = "right"

            } else if (e.keyCode === 40 && direction !== "up") {
                initialDirection = "down"

            } else if (e.keyCode === 38 && direction !== "down") {
                initialDirection = "up"
            }

        })


        const checkIfsnakeHitWall = (coordinates) => {
            let x = coordinates.split('-')
            x[0] = parseInt(x[0])
            x[1] = parseInt(x[1])


            if (x[0] === 0 || x[0] === 21) {
                setGameOver(true)
            } else if (x[1] === 0 || x[1] === 21) {
                setGameOver(true)
            }
        }

        const snakeAteItself = (snakeHead) => {
            for (let i = 1; i < storeBodyId.length; i++) {
                if (snakeHead === storeBodyId[i]) {
                    setGameOver(true)
                }
            }
        }

    }


    return (
        <div id="game">
            {!startGame && <Button type="button" onClick={renderBoard} >Start</Button>}
            {startGame &&
                <React.Fragment>
                    {gameOver && <GameOver ></GameOver>}
                    {!gameOver &&
                        <div>
                            <Button onClick={restartGame}>Restart</Button>
                            <Board /> </div>
                    }
                </React.Fragment>}
        </div>

    )

}

export default App
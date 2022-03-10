import "./Board.css"
import Cell from "./Cell"
import Score from "./Score"

const Board = () => {
    const count = 20

    return (
        <div>
            <Score />
            <div id="game-board">{
                [...Array(count)].map((element, index) => {
                    return (
                        <Cell value={index + 1} key={index + 1} />
                    )
                })
            }
            </div>
        </div>
    )
}

export default Board
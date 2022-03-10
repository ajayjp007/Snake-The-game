import { Fragment } from "react"
import "./Score.css"

const Score = () => {

    return (
        <Fragment>
            <div className="score-board">
                <p>Score :<span id="score"></span> </p>
            </div>
        </Fragment>
    )
}

export default Score
import React from "react"
import "./Cell.css"

const Cells = (props) => {
    const count = 20


    return (
        <div>
            {
                [...Array(count)].map(
                    (element, index) => {
                        return (
                            <div className="cells" value={props.value} id={`${props.value}-${index + 1}`} key={`${props.value}-${index + 1}`}></div>
                        )
                    }
                )
            }
        </div>
    )
}

export default Cells
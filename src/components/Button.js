import "./Button.css"


const Button = (props) => {
    return (
        <button onClick={props.onClick} type="button" className="start-game">{props.children}</button>
    )
}

export default Button
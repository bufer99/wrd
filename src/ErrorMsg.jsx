import "./ErrorMsg.css";

export const ErrorMsg = ({ onClose }) => {
    return (
        <div className="error">
            <span>"Please enter/select your answer!"</span>
            <button onClick={onClose} >OK</button>
        </div>
    )
}
import "./Finalize.css";

export const Finalize = ({ answers }) => {
    return (
        <div className="wrapper">
            <h1>Summary</h1>
            <div className="finalize">
                {Object.entries(answers).map(e => (
                    <div key={e[0]} className="qa">
                        <h2>{e[0]}</h2>
                        <div className="answer">{Array.isArray(e[1]) ? e[1].map(e => (<li key={e}>{e}</li>)) : <li>{e[1]}</li>}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
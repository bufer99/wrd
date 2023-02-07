import { useEffect, useState } from "react"
import "./Question.css"
import { useSearchParams } from "react-router-dom";


const types = [
    "SELECT_ONE",
    "SELECT_MORE",
    "FREE_TEXT"
]

export const Question = ({ setAnswer, active, state }) => {

   
    const { question, type, answers } = state;
    const [formData, setFormData] = useState("");
    const [formDataMultipleAnswers, setFormDataMultipleAnswers] = useState([]);

    useEffect(() => {
        setAnswer((state) => {
            return {
                ...state,
                [question]: formDataMultipleAnswers
            }
        })
    }, [formDataMultipleAnswers])

    useEffect(() => {
        setAnswer((state) => {
            return {
                ...state,
                [question]: formData
            }
        })
    }, [formData])

    const handleChange = (e) => {
        if (type === "SELECT_MORE") {
            setFormDataMultipleAnswers((state) => [...state, e.target.value])
        }
        else {
            setFormData(e.target.value)
        }
    }

    if (active) return (
        <div >
            <form>
                <div className="question">{question}</div>

                <div className="answers">
                    {type === "SELECT_ONE" ? answers.map(e => (
                        <div key={e} className="radios">
                            <input type="radio" id={e} name="a" value={e} checked={formData === e} onChange={handleChange} />
                            <span>{e}</span>
                        </div>
                    )) : type === "SELECT_MORE" ? answers.map(e => (
                        <div key={e} className="radios">
                            <input type="radio" id={e} name={e} value={e} checked={formDataMultipleAnswers.includes(e)} onChange={handleChange} />
                            <span>{e}</span>
                        </div>
                    )) : <textarea maxLength={255} value={formData} onChange={handleChange} />}
                </div>
            </form>
        </div>
    )
}
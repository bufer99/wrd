import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Layout } from './Layout';
import { Question } from './Question';
import { ErrorMsg } from './ErrorMsg';
import { Finalize } from './FInalize';
import { useSearchParams } from 'react-router-dom';


function App({ input }) {

  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState(input.reduce((p, c) => {
    return {
      ...p,
      [c.question]: ""
    }
  }, {}))
  const [QsIndex, setQsIndex] = useState(0)


  useEffect(() => {
    if (QsIndex !== input.length) setSearchParams({ "question": QsIndex })
    else setSearchParams({ "question": "Summary" })
  }, [QsIndex])


  const handleNav = (e) => {
    if (e.target.id === "next") {
      if (answers[input[QsIndex].question] === "") {
        setError(true);
      } else {
        setQsIndex((QsIndex) => QsIndex + 1);
      }
    }
    else if (e.target.id === "prev") {
      setQsIndex((QsIndex) => QsIndex - 1);
    }
  }

  const handleFinalize = (e) => {
    if (answers[input[QsIndex].question] === "") {
      setError(true);
    } else {
      setQsIndex(input.length);
    }
  }


  return (
    <div className="App">
      <Layout>
        {input.map((e, k) => (
          <Question setAnswer={setAnswers} active={QsIndex === k} key={k} state={e} />
        ))}
        {QsIndex === input.length && <Finalize answers={answers} />}
        {QsIndex !== input.length && <div className='nav'>
          <button disabled={QsIndex === 0} id="prev" onClick={handleNav}>Previous</button>
          {QsIndex === input.length - 1 ? <button onClick={handleFinalize}>Finalize</button> :
            <button disabled={QsIndex == input.length - 1} id="next" onClick={handleNav}>Next</button>
          }
        </div>}
        {error && <ErrorMsg onClose={() => setError(false)} />}
      </Layout>
    </div>
  )
}

export default App
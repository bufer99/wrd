import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import json_data from "./example_data/poll.json";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App input={json_data} />
    </BrowserRouter>
  </React.StrictMode>,
)

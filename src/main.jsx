import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"

import { GithubProvider } from './context/github/GithubContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <GithubProvider>
        <App />
      </GithubProvider>
    </Router>
  </StrictMode>,
)

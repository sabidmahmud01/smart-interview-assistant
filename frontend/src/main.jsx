import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

// ReactDOM.createRoot finds the <div id="root"> in index.html
// and hands control over to our React App component.
// This is the very first thing that runs when someone opens the website.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

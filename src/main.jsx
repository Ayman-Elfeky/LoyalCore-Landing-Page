import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log("Don't forget to put it in global state or context");
// Don't forget to put it in global state or context
localStorage.setItem('theme', 'dark');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

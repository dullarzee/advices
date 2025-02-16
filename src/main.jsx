import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind/App.css'
import App from './App.jsx'

const body = document.querySelector('body');
body.style.backgroundColor = 'hsl(218, 23%, 16%)';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLayout/>
  </StrictMode>,
)

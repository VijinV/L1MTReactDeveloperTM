import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './sass/custom.scss'
import App from './App.tsx'
import 'bootstrap';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

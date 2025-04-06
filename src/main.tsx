import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './sass/custom.scss'
import App from './App.tsx'
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as bootstrap from 'bootstrap';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import TransContextProvider from './context/transContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TransContextProvider>
      <App />
    </TransContextProvider>
  </BrowserRouter>,
)

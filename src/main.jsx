import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './i18n.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback="loading ... " > 
    <App />
    </Suspense>
  </StrictMode>,
)


// i18n translations might still be loaded by the http backend
// use react's Suspense

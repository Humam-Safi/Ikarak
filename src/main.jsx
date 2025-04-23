import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FilterContext from './components/Context/filterContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterContext>
      <App />
    </FilterContext>
  </StrictMode>,
)

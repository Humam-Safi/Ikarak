import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FilterContext from './components/Context/filterContext.jsx'
import SearchContext from './components/Context/searchContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterContext>
      <SearchContext>
      <App />
      </SearchContext>
    </FilterContext>
  </StrictMode>,
)

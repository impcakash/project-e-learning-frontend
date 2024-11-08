import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Nav1 from './components/Nav1.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Nav1 />
     <Nav2 />
  </StrictMode>,
)

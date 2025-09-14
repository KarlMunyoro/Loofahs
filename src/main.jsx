import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import App from './App.jsx'
import Logo  from './Logo.jsx'
import ItemList from './ItemList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Logo />
    <Home />
    <ItemList />
  </StrictMode>,
)

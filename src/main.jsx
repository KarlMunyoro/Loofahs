import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import App from './App.jsx'
import Logo  from './Logo.jsx'
import ItemList from './ItemList.jsx'
import WhatsAppForm from './WhatsAppForm.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Logo />
    <Home />
    {/* <ItemList /> */}
    <WhatsAppForm/>
    <Footer/>
  </StrictMode>,
)

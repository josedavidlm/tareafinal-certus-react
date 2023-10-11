import React from 'react'
import ReactDOM from 'react-dom/client'
import { Principal } from './Principal'
import './css/main.css'
import { Navbar } from './components/Navbar/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Principal />        
  </React.StrictMode>,
)

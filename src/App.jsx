import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import CookiesIm from './components/Cookies/CookiesIm'
import GetCookies from './components/Cookies/GetCookies'

function App() {
 

  return (
    <>
      <Home></Home>
      <GetCookies></GetCookies>
      <CookiesIm></CookiesIm>
    </>
  )
}

export default App

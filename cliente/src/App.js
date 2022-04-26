import React from 'react'
import Navbar from './Components/Navbar'
import '../src/Assets/Styles/scss/global.scss'
const App = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
   </>
  )
}

export default App
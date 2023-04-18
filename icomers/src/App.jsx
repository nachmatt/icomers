import NavBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'

import './App.scss';
import { useState, useEffect } from 'react'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Main />
      <Footer />
    </div>
  )
}

export default App

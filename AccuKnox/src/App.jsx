import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Widget from './Components/Widget'

function App() {

  return (
    <>
      <Navbar />
      <div className='flex h-[95vh] m-10 p-5'>
        <Widget title={"Widget Title"}/>
      </div>
    </>
  )
}

export default App

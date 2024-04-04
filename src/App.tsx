import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import DashBoard from './components/DashBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='app_heading'>Auth Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

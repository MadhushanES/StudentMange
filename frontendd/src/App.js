import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddStudent from './Pages/add_student'
import Dashbord from './Pages/dashboard'
import Navbar from './Components/Navbar'

export default function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        
        <Routes>

        < Route path='/add' element={<AddStudent/>}/>
        < Route path='/dash' element={<Dashbord/>}/>
        
        </Routes>
      </Router>
      

    </div>
  )
}

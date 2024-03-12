import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddStudent from './Pages/add_student'
import Dashbord from './Pages/dashboard'
import Popup from './Components/Popup'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>

        < Route path='/add' element={<AddStudent/>}/>
        < Route path='/dash' element={<Dashbord/>}/>
        
        </Routes>
      </Router>
      

    </div>
  )
}

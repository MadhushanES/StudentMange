import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <a className='title' href='/'> SMS by MESP</a>
        {/* <div className='selection'> */}
            <ul>
                <li>
                    <a href='/dash'>DashBoard</a>
                </li>

                <li>
                    <a href='/add'>AddStudent</a>
                </li>

            </ul>

        {/* </div> */}


      </nav>
  )
}

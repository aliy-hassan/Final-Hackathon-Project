import React from 'react'
import "./navigation.css"
import Link from 'next/link'

function Navigation () {
  return (
    <div className='navigation'>
        <div className="logo">
          <h2><Link href="/">D-Doctor</Link></h2>
        </div>
        <ul className='navBar'>
            <li><Link href="./blog">Health Blog</Link></li>
            <li><Link href="">Find Doctor</Link></li>
            <li><Link href="./bookAppointment" className='bookBtn'>Book Appointment</Link></li>
            <li><Link href="./joinAsDoctor" className='joinBtn'>Join As Doctor</Link></li>
        </ul>
    </div>
  )
}

export default Navigation
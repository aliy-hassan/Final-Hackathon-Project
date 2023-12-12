import React from 'react'
import './style.css'
import Navigation from '../(components)/navigation/navigation'
import Image from 'next/image'
import Footer from '../(components)/footer/footer'

function page () {
  return (
    <div>
      <Navigation />
      <div className="ba-banner">
        <h1>Book Appointment</h1>
      </div>
      <div className="ba-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatem ratione modi quae, accusamus numquam maiores nam facere id.</p>
      </div>
      <div className="ba-line"></div>

      <div className="ba-form">
        <div className="inp-box">
          <label htmlFor="">Patient Name:</label>
          <input type="text" />
        </div>
        <div className="inp-box">
          <label htmlFor="">Medical History:</label>
          <input type="text" />
        </div>
        <div className="inp-box">
          <label htmlFor="">Doctor type:</label>
          <select name="" id="">
            <option value="">Dermatologist</option>
            <option value="">Gynecologist</option>
            <option value="">Urologist</option>
            <option value="">Dentist</option>
            <option value="">Phychiatrist</option>
          </select>
        </div>
        <div className="inp-box">
          <label htmlFor="">Select Time Slot:</label>
          <select name="" id="">
            <option value="">Today, 2pm-4pm</option>
            <option value="">Today, 9pm-11pm</option>
            <option value="">Tomorrow, 8am-12pm</option>
            <option value="">Tomorrow, 2pm-4pm</option>
            <option value="">Tomorrow, 9pm-11pm</option>
          </select>
        </div>
        <div className="inp-box">
          <label htmlFor="">Doctor name:</label>
          <input type="text" />
        </div>
        <div className="inp-box">
          <button type="submit">Submit</button>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default page
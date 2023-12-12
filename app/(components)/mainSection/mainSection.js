import React from 'react'
import "./mainSection.css"
import Image from 'next/image'

function MainSection () {
  return (
    <div className='MainSection'>
        <div className="innerSection">
            <div className="secLeft">
                <div className="content">
                    <h2>Book Your Appointment Now</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, placeat dolor sequi similique esse eligendi fugit culpa architecto unde voluptas dolorum hic vitae rem doloribus. Fuga corporis eos rem eveniet!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, placeat dolor sequi similique esse elig rem doloribus. Fuga corporis eos rem eveniet!</p>
                    <p>Lorem ipsum dolor sit vitae rem doloribus. Fuga corporiseveniet Fuga corporis eos rem eveniet!</p>
                    <button>Book Now!</button>
                </div>
            </div>
            <div className="secRight">
                
            </div>
        </div>
    </div>
  )
}

export default MainSection
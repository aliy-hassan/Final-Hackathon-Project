import React from 'react'
import './style.css'
import Navigation from '../(components)/navigation/navigation'
import Image from 'next/image'

function page () {
  return (
    <div>
      <Navigation />
      <div className="blog-banner">
        <h1>Health Blog/Latest</h1>
      </div>
      <div className="blog-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatem ratione modi quae, accusamus numquam maiores nam facere id.</p>
      </div>
      <div className="blog-line"></div>

      <div className="blog-flex">
        <div class="card b-card">
          <Image src="/images/b1.jpg" width={'400'} height={'320'} class="card-img-top"></Image>
          <div class="card-body b-card-body">
            <h2>Do toddler formulas deliver on nutrition claims?</h2>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
          </div>
        </div>
        <div class="card b-card">
          <Image src="/images/b2.jpg" width={'400'} height={'320'} class="card-img-top"></Image>
          <div class="card-body b-card-body">
            <h2>Cellulitis: How long does it take to heal on legs?</h2>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
          </div>
        </div>
        <div class="card b-card">
          <Image src="/images/b4.jpg" width={'400'} height={'320'} class="card-img-top"></Image>
          <div class="card-body b-card-body">
            <h2>21 spices for healthy holiday foods</h2>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default page
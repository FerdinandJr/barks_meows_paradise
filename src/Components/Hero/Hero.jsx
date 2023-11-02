import React from 'react'
import './Hero.css'
import hero_image from '../Assets/dog_model.png'

const Hero = () => {
  return (
    <div>
    <div className='big_text'>FREE SHIPPING</div>
    <div className='small_text'>ON ORDERS NATIONWIDE</div>
    <div className="hero">
        <div className="text-left margin-top">
            <span>Welcome to</span>
            <h2>Barks & Meows Paradise</h2>
            <span/>
            <p>HIGH QUALITY</p>
            <p>DOG AND CAT FOOD</p>
            <p>TOP 1 RESELLER IN MUNTINLUPA</p>
        </div>
        <div className="text-right margin-top">
            <img src={hero_image} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Hero
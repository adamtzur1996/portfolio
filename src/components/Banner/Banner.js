import React from 'react'
import './banner.scss'
import { Typewriter } from './Typewriter';

const content = [
  "Hi, I'm a Frontend Developer", 
  "Experienced in ReactJS, NextJS and NodeJS",
  "Professional Web Developer with 3 years of experience"
]

function Banner() {
   
  const useTypewriter = Typewriter(content)

    return(
        <section className="banner-section">
        <div className='banner-mask'></div>
            <div className="banner-wrapper">
            </div>
            <div className='intro-text'>
                <h1>Welcome</h1>
                <h3 className='blinking-cursor'>{useTypewriter}</h3>
            </div>
            {/* <div className='connect-with-me'>
                <input placeholder='Email Address' />
                <button>Connect With Me</button>
            </div> */}
        </section>
    )
}

export default Banner
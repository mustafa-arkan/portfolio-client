import React from "react"
import "./Hero.css"


import { Typewriter } from "react-simple-typewriter"


const Hero = () => {


    





  return (
    <>
      <section className='hero' id='home'>



        <div className='container'> 
          <div className='left'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>MUSTAFA ARKAN</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" React Developer.","Frontend Developer."," Professional Coder."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

           
              </div>
              
              {/* <button >
              onClick={handlePdf}
              Download Resume

              </button> */}

<a href="Resume.pdf" 

download="Resume Resume.pdf"



>

<button className="nav_button">Resume</button>





</a>



             
        </div>
      </section>
    </>
  )
}

export default Hero
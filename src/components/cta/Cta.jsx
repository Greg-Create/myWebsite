import React from 'react'
import './cta.css'
import { useState } from 'react'

const Cta = () => {


    const  [animation, setAnimation] = useState(false)

  const detectScroll =() => {
    if(window.scrollY >= 1600) {
      setAnimation(true)
    }
    else {
      setAnimation(false)
    }
  }

  window.addEventListener('scroll', detectScroll)

 
let onCondition = animation? "scale-up-center-one" : "gpt_cta-hidden" 

    return (
        <div className= {`gpt__cta ${onCondition}` }>
           <div className='gpt__cta-content'>
                <p>Request Early Access</p>
                <h3>Register today and fish all you want</h3>
           </div>

           <div className='gpt__cta-button'>
                <button type='button'>Get Started</button>
           </div>
        </div>
    )
}

export default Cta
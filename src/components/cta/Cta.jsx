import React from 'react'
import './cta.css'

const Cta = () => {
    return (
        <div className='gpt__cta '>
           <div className='gpt__cta-content'>
                <p>Request Early Access</p>
                <h3>Register today and explore endless possibilities</h3>
           </div>

           <div className='gpt__cta-button'>
                <button type='button'>Get Started</button>
           </div>
        </div>
    )
}

export default Cta
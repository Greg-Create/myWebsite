import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import shark from '../../assets/first-visit_30280.png'

const Header = () => {
    return (
        <div className='gpt3__header section_padding' id="home">
            
            <div className='gpt__header-content'>
            <h1 className='gradient__text'> This is my website template</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
           
            <div className='gpt3__header-content__input'>
            <input type="email" placeholder='you email address' />
            <button type='button'>Get Strarted</button>
            </div>

            <div className='gpt3__header-content__people'>
                <img src={people} alt='people'/>
                <p>1600 users have submited</p>
            </div>
            </div>
            <div className='gpt3__header-image'>
            <img src="https://www.transparentpng.com/thumb/shark/MRDEW4-first-visit.png" alt="blue toy happy shark clipart free download @transparentpng.com" />
    </div> 
            
        </div>
    ) 
}

export default Header
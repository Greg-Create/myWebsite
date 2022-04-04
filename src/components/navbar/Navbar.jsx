import React from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg';
import { useState, useEffect, useContext } from 'react';
import SignUp from "../Sign-up/SignUp"
import Login from "../login/Login"
import { useRef } from 'react/cjs/react.production.min';



const Menu =() => (
    <>
   <p><a href="#home">Home</a></p>
   <p><a href="#Something">Something</a></p>
   <p><a href="#Shark">Shark</a></p>
   <p><a href="#Whale">Whale</a></p>
   <p><a href="#water">Water</a></p>
   </>
)



const Navbar = (props) => {

    const [value, setValue] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    const [signupPopup, setsignupPopup] = useState(false)
    const [loginPopup, setloginPopup] = useState(false)
    
    
    useEffect(() => {
        if (signupPopup || loginPopup) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      }, [signupPopup, loginPopup]);


    

    


     
    
    
      return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <h1 className='gpt3__navbar-logo'>Greg's Website</h1> 
                </div>
                <div className='gpt3__navbar-links_container'>
                    <Menu />
                </div>
            </div>

            <div className='gpt3__navbar-log'>

            
            {value? <h1>Logged in </h1> :
            <div className='gpt3__navbar-sign'>
                <p type="button" onClick={()=>setloginPopup(true)}>Log In</p>
                <button type="button" onClick={()=> setsignupPopup(true)}>Sign Up</button>
                </div>
            }
             </div>

           
            <SignUp  trigger={signupPopup} setTrigger={setsignupPopup}>
                <h1>My login</h1>
            </SignUp>

            <Login trigger={loginPopup} setTrigger={ setloginPopup}>
              <h1>Login</h1>
            </Login>

           
           
            <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
                )
            }
            </div>
        </div>
    )
}

export default Navbar

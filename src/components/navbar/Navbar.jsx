import React from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg';
import { useState, useEffect, useContext } from 'react';
import SignUp from "../Sign-up/SignUp"
import Login from "../login/Login"
import { Account } from '../../Account';
import Status from '../../Status';
import {AccountContext} from '../../Account'



const Menu =() => (
    <>
   <p><a href="#home">Home</a></p>
   <p><a href="#wgpt3">What is Gpt3?</a></p>
   <p><a href="#possibility">Open Ai</a></p>
   <p><a href="#features">Case Studies</a></p>
   <p><a href="#blog">Library</a></p>
   </>
)



const Navbar = (props) => {

    const [value, setValue] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    const [signupPopup, setsignupPopup] = useState(false)
    const [loginPopup, setloginPopup] = useState(false)
    
    
    useEffect(() => {
        if (signupPopup) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      }, [signupPopup]);

     
    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='gpt3__navbar-links_container'>
                    <Menu />
                </div>
            </div>

            <div className='gpt3__navbar-log'>

            
            {value? <h1>Logged in </h1> :
            <div className='gpt3__navbar-sign'>
                <p type="button" onClick={()=> setloginPopup(true)}>Sign in</p>
                <button type="button" onClick={()=> setsignupPopup(true)}>Sign Up</button>
                </div>
            }
             </div>

           <Account>
           <Status setValue={setValue}/>
            <SignUp trigger={signupPopup} setTrigger={setsignupPopup}>
                <h1>My login</h1>
            </SignUp>

            <Login trigger={loginPopup} setTrigger={ setloginPopup}>

            </Login>

            </Account>
           
           
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

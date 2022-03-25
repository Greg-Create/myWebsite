import React, { useEffect, useState } from "react"
import './signUp.css'
import {AiOutlineClose} from 'react-icons/ai'




const SignUp =(props) => {

        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        
        


    
   


    

    return ( (props.trigger) ? (
    <div className="gpt__login ">
        <div className="gpt__login-content ">
            <h1>Sign Up</h1>
       
        <div className="gpt__login-content_form-container"> 
            <div className="gpt__login-content_form email">
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>

            <div className="gpt__login-content_form password">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter Password"  value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>

            <div className="gpt__login-content_form submit">
                <button type="submit" > Submit</button>
            </div>
        </div>  

        <AiOutlineClose className="login-close-button" onClick={() => props.setTrigger(false)}/>
        </div>

       
            

    </div>

    ) : ""


    
    )
    
}

export default SignUp
import React, { useEffect, useState } from "react"
import './signUp.css'
import {AiOutlineClose} from 'react-icons/ai'
import UserPool from "../../UserPool"




const SignUp =(props) => {

        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [submit, setSubmit] =useState(false)
        const [ state, setState] = useState(false)
    
        
        const onSubmit  =(event) =>{
            event.preventDefault()
        
            UserPool.signUp(email, password, [] , null, (err, data) => {
                if(err){
                    console.error(err)
                    alert(err)
                    
                }

                
                props.setTrigger(false)

            })

            
            
        }
        


    
   


    

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
                <button type="submit" onClick={onSubmit}> Submit</button>
            </div>
        </div>  

        <AiOutlineClose className="gpt__login-content-button-close" id="close-button" onClick={() => props.setTrigger(false) }/>
        </div>

       
            

    </div>

    ) : ""


    
    )
    
}

export default SignUp
import React, {useState, useContext, useEffect} from "react";
import { Account, AccountContext } from "./Account";
import "./status.css"

const Status=(props) => {
    const [status, setStatus] = useState(false)
    const {getSession, logout} = useContext(AccountContext)

    useEffect(()=> {
        getSession()
        .then(session => {
            console.log("Session", session);
            setStatus(true)
        })
    })

 
    {status ? props.setValue(true) : props.setValue(false)} 

     return(
       <div>
            {status ? <button className="logout-button"onClick={logout}>Logout</button> : ""}
       </div>
     )


}
export default Status 
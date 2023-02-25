import React, { useEffect, useState } from 'react';
import "../signup/signup.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    const SignUpHandler = (e) => {
        e.preventDefault()
        console.log(email, password, confirmPassword)

        fetch("signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email, password, confirmpassword: confirmPassword
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                else {
                    alert(data.message)
                    navigate("/signin")
                }
            })
 }

    return (
        <>
        <div  className='container'>
         
                <div className='main'>
                  
                 <form className='dat'>
                 <h2>  SIGN UP  </h2>
                    <div className='detail'>
                        <input className='feild' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' name='email' />
                    </div>
                    <div className='detail'>
                        <input className='feild' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" name='password' />
                    </div>
                    <div className='detail'>
                        <input className='feild' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder=" Repeat Password" name=' confirm password' />
                    </div>
                        
                    <div className="check">
                <input type="checkbox" />
                <p>I Agree with Terms & condition</p>
                 </div>


                    <div className='btn'>
                        <button id="bt" onClick={(e) => SignUpHandler(e)}>Continue</button>
                    </div>
                    </form>
                </div>
                
        </div>
          
        </>
    )
}
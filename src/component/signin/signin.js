import React, { useState } from "react";
import {  Link } from "react-router-dom";
import "../signin/sigin.css"
import { useNavigate } from "react-router-dom";


export default function Signin()
{
  const navigate =useNavigate()
  const [email,setEmail] = useState("")
  const [password,SetPassword] = useState("")
  const SignInHandler = (e) => {
    e.preventDefault()
    console.log(email, password)
    fetch("/signin", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email, password
        })
    }).then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error)
            }
            else {
               localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                alert(data.message)
                navigate("/Content")
            }
        })
}

    return (
        <>
         <div  className='container'>
    
    <div className="box">
        <form className="datas">
            <h2>SignIn</h2>
            <div className="details">
                <h1>Email</h1>
                <input className="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' name='email' />
            </div>
            <div className="details">
                <h1>password</h1>
                <input className="pwd"  type="password" value={password} onChange={(e) => SetPassword(e.target.value)} placeholder="Password" name='password' />
            </div>
            <div className="checkbox">
                <input type="checkbox" />
                <p>Remember me</p>
            </div>
            <div className="btn">
                <button onClick={(e) => SignInHandler(e)} >Submit</button>
            </div>
            <a href="#">Forgot Password?</a>
        </form>
    </div>

         </div>
        </>
    )
}
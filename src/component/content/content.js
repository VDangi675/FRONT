import React from "react";
import {  Link } from "react-router-dom";
import recipe  from "../../Images/recipe.png"
import "../content/content.css"


export default function Content(){
    return (
        <>
<div className="content">
    <div className="logo">
    <img  className="img" src={recipe} alt="logo"></img>
    </div>
    
    <div className="search">
        <input id="srh" type="text" placeholder="Search Hear"/>
    </div>
    <div className="new_Add">
        <Link to="/Add_New" ><button className="New_recipe">New</button></Link>
    </div>
    <div className="All_recipe">

    </div>
</div>
        </>
    )
}
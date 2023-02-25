import React, { useState } from "react";
import "../AddRecipe/Recipe.css";

export default function  Recipe(){
    const [title,setTitle]= useState()
    const [Author,setAuthor]= useState()
    const [instructions,setInstructions]= useState()
    const [ingredients,setIngredients]= useState()

    return (
        <>
        <div className="new">
            <form className="recipe_data">
                <h3>Create A Recipe</h3>
                <div className="deta">
                <div className="title">
                    <p>Recipe Title</p>
                    <input className="d1" type="text"  value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                 <div className="Author">
                    <p>Author</p>
                    <input className="dd" type="text" value={Author} onChange={(e) => setAuthor(e.target.value)}/>
                </div>
                
                <div className="image">
                    <p>Upload Image </p>
                    <input className="dd"  type="file"/>
                </div>
                <div className="Instructions">
                    <p>Instructions</p>
                    <input className="d2" type="text" value={instructions} onChange={(e) => setInstructions(e.target.value)}/>
                </div>
                <div className="Ingredients">
                    <p>Ingredients</p>
                    <input className="d2" type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)}/>
                </div>
                <button id="bbt">Add</button>
                </div>
            </form>
        </div>
        </>
    )
}
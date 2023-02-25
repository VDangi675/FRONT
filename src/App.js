import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import { useState } from 'react';
import Signin from './component/signin/signin';
import Signup from './component/signup/signup';
import Content from './component/content/content';
import Recipe from './component/AddRecipe/Recipe';

function App() {
  const [user, setUser]= useState({
    // UserID: localStorage.getItem("UserID"),
    // UserName: localStorage.getItem("UserName"),
    jwt:localStorage.getItem("jwt"),
    user:localStorage.getItem("user"),

  });


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/' element={<Signup/>}/>
  <Route path='/Content' element={<Content/>}/>
  <Route path='/Add_New' element={<Recipe/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

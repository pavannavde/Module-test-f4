import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';

const App = () =>{

   return(
    <div>
         <Navbar/>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/cart'element={<Cart/>}/>
        </Routes>
    </div>
   )



}
 

export default App;
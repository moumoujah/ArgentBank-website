import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/home/Home.jsx';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SingIn from './pages/signIn/SignIn.jsx';
import User from './pages/user/User.jsx';

function App() {
    return (
        
            <Routes>
                {/* <Route path='*' element={<Home />}/> */}
                {/* <Route path="*" element={<Error />}/> */}
                <Route path="/" element={<Home />}/>
                <Route path="/sign-in" element={<SingIn />}/>
                <Route path="/user" element={<User />}/>
            </Routes>
       
      
    )
}

export default App;

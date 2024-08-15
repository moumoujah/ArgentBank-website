import { Routes, Route } from "react-router-dom";
import React from 'react';
import { useSelector } from 'react-redux';
import Home from './pages/home/Home.jsx';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Profile from './pages/profile/Profile.jsx';
import Error from './pages/error/Error.jsx';


function App() {
    const token = useSelector((state) => state.auth.token);
    return (

            <Routes>
                {/* <Route path='*' element={<Home />}/> */}
                <Route path="*" element={<Error />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/Login" element={<Login />}/>
                <Route path="/Profile" element={token ? <Profile /> : <Login />}/>
            </Routes>


    )
}
export default App;
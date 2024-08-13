import { Routes, Route } from "react-router-dom";
import React from 'react';
import { useSelector } from 'react-redux';
import Home from './pages/home/Home.jsx';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SingIn from './pages/signIn/SignIn.jsx';
import User from './pages/user/User.jsx';
import Error from './pages/error/Error.jsx';


function App() {
    const token = useSelector((state) => state.auth.token);
    return (

            <Routes>
                {/* <Route path='*' element={<Home />}/> */}
                <Route path="*" element={<Error />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/sign-in" element={<SingIn />}/>
                <Route path="/user" element={token ? <User /> : <SingIn />}/>
            </Routes>


    )
}
export default App;
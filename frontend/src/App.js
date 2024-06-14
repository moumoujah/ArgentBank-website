import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/home/Home.jsx';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SingIn from './pages/signIn/SignIn.jsx';

function App() {
    return (
      <div className="App">
        {/* <BrowserRouter> */}
            <Routes>
                {/* <Route path='*' element={<Home />}/> */}
                {/* <Route path="*" element={<Error />}/> */}
                <Route path="/" element={<Home />}/>
                <Route path="/sign-in" element={<SingIn />}/>
            </Routes>
        {/* </BrowserRouter> */}
      </div>
    )
}

export default App;

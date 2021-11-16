import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import { Route, Routes } from "react-router-dom";

function App() {

    return (<div className="container-fluid">
        <Header />
        <Routes>
            <Route path="/" element={ <HomePage/>} />
            <Route path="/courses" element={ <CoursesPage/>} /> 
            <Route path="/about" element={ <AboutPage/>} /> 
        </Routes>
    </div>
    );
}

export default App;
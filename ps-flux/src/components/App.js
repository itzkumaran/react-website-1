import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import NotFoundPage  from './NotFoundPage';
import ManageCoursePage from './ManageCoursePage';
import { Route, Routes, Navigate } from "react-router-dom";

function App() {

    return (<div className="container-fluid">
        <Header />
        <Routes>
            <Route path="/" element={ <HomePage/>} />
            <Route path="/courses" element={ <CoursesPage/>} /> 
            <Route path="/about" element={ <AboutPage/>} />
            <Route path="/course/:slug" element={<ManageCoursePage/>} />
            <Route path="/about-page" element={<Navigate to="/about" />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </div>
    );
}

export default App;
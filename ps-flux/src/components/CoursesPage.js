import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

function renderHeader() {
    return(
    <tr>
        <th>Title</th>
        <th>Author ID</th>
        <th>Category</th>
    </tr>  
    );      
}

function renderRow(course) {
    return (
        <tr key={course.id}>
            <td>{course.title}</td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
        </tr>
    );        
}

function CoursesPage () {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        getCourses().then( _courses => setCourses(_courses));
    },[]);

    return (
        <>
        <h2>Courses</h2>
        <table className="table">
            <thead>
                { renderHeader() }
            </thead>
            <tbody> 
                { courses.map(renderRow) }
            </tbody>
        </table>
        </>
    );
   }

export default CoursesPage;
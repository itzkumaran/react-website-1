import React, { useState, useHistory } from "react";
import * as courseApi from "../api/courseApi";
import CourseForm from "./CourseForm";
import { Route, Routes, Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

const ManageCoursePage = props => {
    const [ course, setCourse ] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    function handleChange( {target} ) {
        setCourse({
            ...course, 
            [target.name]: target.value
        });
    }
 
    function handleSubmit(event) {
        event.preventDefault();
        courseApi.saveCourse(course).then( () => {
            toast.success("Saved course");
        });
    }

    return(
        <>
        <h2>
            Manage Courses
        </h2>
        <CourseForm 
            course={course} 
            onChange={handleChange} 
            onSubmit={handleSubmit}
        />
        </>
    );
}

export default ManageCoursePage;


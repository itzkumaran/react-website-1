import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import * as courseApi from "../api/courseApi";
import CourseForm from "./CourseForm";
import { toast } from 'react-toastify';

const ManageCoursePage = props => {
    const [ errors, setErrors ] = useState({});
    const [ course, setCourse ] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });
    const {slug} = useParams();
    useEffect( () => {
        if (slug) {
            courseApi.getCourseBySlug(slug).then( _course => setCourse(_course));
        }
    }, [slug]);

    function handleChange( {target} ) {
        setCourse({
            ...course, 
            [target.name]: target.value
        });
    }

    function formisValid() {
        const _errors = {};
        if(!course.title) _errors.title = "Title is required";
        if(!course.authorId) _errors.authorId = "Author ID is required";
        if(!course.category) _errors.category = "Category is required";
        setErrors(_errors);
        return Object.keys(_errors).length === 0;
    }
 
    function handleSubmit(event) {
        event.preventDefault();
        if(!formisValid()) return;
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
            errors={errors}
            course={course} 
            onChange={handleChange} 
            onSubmit={handleSubmit}
        />
        </>
    );
}

export default ManageCoursePage;


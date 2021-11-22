import React from "react";
import { useParams, usePrompt } from "react-router-dom";

const ManageCoursePage = props => {
    const {slug} = useParams();
    return(
        <>
        <h2>
            Manage Courses
        </h2>
        {slug}
        </>
    );
}

export default ManageCoursePage;


import React from 'react';
import PropTypes from 'prop-types';

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

function CourseList(props) {
    return(
        <table className="table">
            <thead>
                { renderHeader() }
            </thead>
            <tbody> 
                { props.courses.map(renderRow) }
            </tbody>
        </table>
    )
}

CourseList.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        authorId: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired
    })).isRequired
}

export default CourseList;
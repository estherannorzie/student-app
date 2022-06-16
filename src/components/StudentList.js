// Importing React makes the built-in React functionality available through an object named React.
import React from 'react';
import './StudentList.css';

// components begin with a function. Can be defined as arrow functions or regular functions
const StudentList = () => {
  return (
    <section>
      <h2>Student List</h2>
      <ul>
        <li>Student A</li>
        <li>Student B</li>
        <li>Student C</li>
      </ul>
    </section>
  );
};

// to use the StudentList component in other files, export it
export default StudentList;
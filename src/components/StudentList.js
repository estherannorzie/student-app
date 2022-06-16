// Importing React makes the built-in React functionality available through an object named React.
import React from 'react';
import './StudentList.css';
import Student from './Student';

// components begin with a function. Can be defined as arrow functions or regular functions
const StudentList = () => {
  const headingClass = 'student-list__heading';
  const listClass = 'student-list';
  const studentComponents = [
    <li><Student name="Ada" email="ada@dev.org"></Student></li>,
    <li><Student name="Soo-ah" email="sooah@dev.org"></Student></li>,
    <li><Student name="Chrissy" email="chrissy@dev.org"></Student></li>
  ];

  return (
    <section>
      <h2 className={headingClass}>Student List</h2>
      <ul className={listClass}>
        {studentComponents}
      </ul>
    </section>
  );
};

// to use the StudentList component in other files, export it
export default StudentList;
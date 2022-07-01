// Importing React makes the built-in React functionality available through an object named React.
import React from 'react';
import './StudentList.css';
import Student from './Student';

// components begin with a function. Can be defined as arrow functions or regular functions
const StudentList = () => {
  const headingClass = 'student-list__heading';
  const listClass = 'student-list';
  const studentData = [
    {
      nameData: 'Ada',
      emailData: 'ada@dev.org'
    },
    {
      nameData: 'Soo-ah',
      emailData: 'sooah@dev.org'
    },
    {
      nameData: 'Chrissy',
      emailData: 'chrissy@dev.org'
    }
  ];

  // sets studentComponents to an array of JSX elements. It does this by iterating over each object in studentData, passing each value, one at a time, into our anonymous function as the student parameter. 
  const studentComponents = studentData.map(student => {
    return (
      <li><Student name={student.nameData} email={student.emailData}></Student></li>
      );
    }
  );

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
// Importing React makes the built-in React functionality available through an object named React.
import React from "react";
import "./StudentList.css";
import Student from "./Student";

// components begin with a function. Can be defined as arrow functions or regular functions
const StudentList = (props) => {
  const headingClass = "student-list__heading";
  const listClass = "student-list";

  // sets studentComponents to an array of JSX elements. It does this by iterating over each object in studentData, passing each value, one at a time, into our anonymous function as the student parameter.
  const studentComponents = props.students.map((student, index) => {
    return (
      <li key={index}>
        <Student name={student.nameData} email={student.emailData}></Student>
      </li>
    );
  });

  return (
    <section>
      <h2 className={headingClass}>Student List</h2>
      <ul className={listClass}>{studentComponents}</ul>
    </section>
  );
};

// to use the StudentList component in other files, export it
export default StudentList;

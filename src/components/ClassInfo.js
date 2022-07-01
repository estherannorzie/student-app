import React from "react";

const ClassInfo = (props) => {
  return (
    // wrap this content with an outer <section> element, else there will be an error.
    <section>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of members: {props.numberOfStudents}</li>
      </ul>
    </section>
  );
};

export default ClassInfo;

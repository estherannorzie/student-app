import React from "react";
import PropTypes from "prop-types";

const ClassInfo = (props) => {
  return (
    <section>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of members: {props.numberOfStudents}</li>
      </ul>
    </section>
  );
};

ClassInfo.propTypes = {
  memberCount: PropTypes.number,
};

export default ClassInfo;

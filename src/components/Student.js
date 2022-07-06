import React from "react";
import PropTypes from "prop-types";
import "./Student.css";

// props from StudentList
const Student = (props) => {
  const nameColor = isPresent ? "green" : "red";

  return (
    <div>
      <ul>
        <li className={nameColor}>Nickname: {props.name}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button>Toggle if {props.name} is present</button>
    </div>
  );
};

Student.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isPresent: PropTypes.bool,
};

export default Student;

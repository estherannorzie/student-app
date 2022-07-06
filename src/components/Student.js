import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./Student.css";

// props from StudentList
const Student = (props) => {
  const [isPresent, setIsPresent] = useState(false);

  const togglePresence = () => {
    setIsPresent(!isPresent);
  };

  const nameColor = isPresent ? "green" : "red";

  return (
    <div>
      <ul>
        <li className={nameColor}>Nickname: {props.name}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button onClick={togglePresence}>
        Toggle if {props.name} is present
      </button>
    </div>
  );
};

Student.propTypes = {
  id: PropTypes.number.isRequired,
  nameData: PropTypes.string.isRequired,
  emailData: PropTypes.string.isRequired,
  isPresentData: PropTypes.bool,
};

export default Student;

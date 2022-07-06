import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

// props from StudentList
const Student = (props) => {
  const [isPresent, setIsPresent] = useState(false);

  const togglePresence = () => {
    setIsPresent(!isPresent);
  };

  return (
    <div>
      <ul>
        <li className="">Nickname: {props.name}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button onClick={togglePresence}>
        Toggle if {props.name} is present
      </button>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
export default Student;

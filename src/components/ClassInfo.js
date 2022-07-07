import React from "react";
import PropTypes from "prop-types";

const ClassInfo = (props) => {
  const onDeleteButtonClick = () => {
    props.onDeleteStudent();
  };

  return (
    <section>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of members: {props.memberCount}</li>
      </ul>
      <button onClick={onDeleteButtonClick}>Delete All Students!</button>
    </section>
  );
};

ClassInfo.propTypes = {
  memberCount: PropTypes.number,
};

export default ClassInfo;

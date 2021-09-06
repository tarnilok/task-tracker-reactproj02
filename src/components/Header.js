import React from "react";
import Button from "./Button";
// import PropTypes from 'prop-types';

function Header({ title, toggleShow, isTaskBarShowed }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={isTaskBarShowed ? "steelblue" : "purple"}
        text={
          isTaskBarShowed ? "Hide Create a Task Bar" : "Show Create a Task Bar"
        }
        toggleShow={toggleShow}
      />
    </header>
  );
}

// Header.defaultProps = {
//     title: 'Task Tracker as default'
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// };

export default Header;

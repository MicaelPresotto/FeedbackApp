import React from "react";
import PropTypes from "prop-types";

function Header({ title }) {
  return (
    <header style={HeaderStyles}>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </header>
  );
}

const HeaderStyles = {
  backgroundColor: "rgba(0,0,0,0.4)",
  color: "#ff6a95",
};

Header.defaultProps = {
  title: "Feedback UI",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

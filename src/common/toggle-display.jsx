import React from "react";

const ToggleDisplay = ({ show, children }) => {
  const toggleStyle = {
    display: show ? undefined : "none",
  };

  return <span style={toggleStyle}>{children}</span>;
};

export default ToggleDisplay;

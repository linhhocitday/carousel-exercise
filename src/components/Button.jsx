import React from "react";
import PropTypes from "prop-types";
/**
 * @typedef ButtonProps
 *
 * @property {string} direction The direction of the button
 */

/**
 *@param {React.PropsWithChildren<ButtonProps>} props
 */

const Button = ({ direction, children, onClick }) => {
  return (
    <button className={`btn ${direction}-btn`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default Button;

import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef SlideProps
 *
 * @property {string} img Image of the slide
 * @property {boolean} active Whether the slide is active
 */

/**
 *@param {SlideProps} props
 */

const Slide = ({ img, active }) => {
  if (!active) {
    return (
      <li className="slide">
        <img src={img} />
      </li>
    );
  }

  return (
    <li className="slide" data-active>
      <img src={img} />
    </li>
  );
};

Slide.propTypes = {
  img: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default Slide;

import React from "react";
import Slide from "./Slide";
import PropTypes from "prop-types";

/**
 * @typedef SlidesProps
 *
 * @property {Array} images Includes id, image and status of slides.
 */

/**
 * @param {SlidesProps} props
 */

const Slides = ({ images }) => {
  const imageSlides = images.map((image) => (
    <Slide key={image.id} img={image.img} active={image.active} />
  ));

  return <ul>{imageSlides}</ul>;
};

Slides.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Slides;

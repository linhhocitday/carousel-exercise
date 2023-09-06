import React, { useState } from "react";
import "./main.css";
import Button from "./components/Button";
import Slides from "./components/Slides";

const items = [
  {
    id: 1,
    img: "https://akko.vn/wp-content/uploads/2023/06/akko-cs-switch-piano-lubed-02-768x768.jpg",
    active: true,
  },
  {
    id: 2,
    img: "https://akko.vn/wp-content/uploads/2023/06/akko-cs-switch-piano-lubed-03-768x768.jpg",
    active: false,
  },
  {
    id: 3,
    img: "https://akko.vn/wp-content/uploads/2023/06/akko-cs-switch-piano-lubed-04-768x768.jpg",
    active: false,
  },
];

const App = () => {
  const [images, setImages] = useState(items);

  const prevImage = () => {
    let activeImage = images.find((image) => image.active === true);

    setImages((images) => {
      return images.map((image) => {
        let activeIndex = activeImage.id - 1;

        if (activeImage.id === 1) {
          activeIndex = 3;
        }

        activeImage.active = false;

        if (image.id === activeIndex) {
          return { ...image, active: true };
        }

        return { ...image };
      });
    });
  };

  const nextImage = () => {
    let activeImage = images.find((image) => image.active === true);

    setImages((images) => {
      return images.map((image) => {
        let activeIndex = activeImage.id + 1;

        if (activeImage.id === 3) {
          activeIndex = 1;
        }

        activeImage.active = false;

        if (image.id === activeIndex) {
          return { ...image, active: true };
        }

        return { ...image };
      });
    });
  };

  return (
    <div className="carousel">
      <Button direction={"prev"} onClick={prevImage}>
        <i className="fa-solid fa-arrow-left"></i>
      </Button>
      <Button direction={"next"} onClick={nextImage}>
        <i className="fa-solid fa-arrow-right"></i>
      </Button>

      <Slides images={images} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';

function ImageGallery() {
  const [mainImage, setMainImage] = useState(`./paintings/img_${Math.floor(Math.random()*311)}.jpg`);
  const [choices, setChoices] = useState([]);
  const [visible, setVisible] = useState(false);

  function changeMainImage(img) {
    setMainImage(img);
  }

  useEffect(() => {
    const newChoices = [];
    for (let i = 0; i < 6; i++) {
      newChoices.push({
        src: `paintings/img_${Math.floor(Math.random()*311)}.jpg`,
        alt: `Image ${i + 1}`
      });
    }
    setChoices(newChoices);
  }, []);

  function toggleVisibility() {
    setVisible(!visible);
  }

  return (
    <div>
      <img
        className="main-image"
        src={mainImage}
        onClick={toggleVisibility}
        alt="Main Image"
      />
      {choices.map((choice, index) => (
        <img
          key={index}
          className="choice"
          src={choice.src}
          onClick={() => changeMainImage(choice.src)}
          style={{ display: visible ? 'block' : 'none' }}
          alt={choice.alt}
        />
      ))}
    </div>
  );
}

export default ImageGallery;
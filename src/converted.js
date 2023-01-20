import React, { useState, useEffect} from 'react';

function ImageGallery() {
  const [mainImage, setMainImage] = useState(`./paintings/img_${Math.floor(Math.random()*311)}.jpg`);
  const [choices, setChoices] = useState([]);
  const [visible, setVisible] = useState(false);

  function changeMainImage(img) {
    setMainImage(img);
    changeRandomImages();
  }

  function changeRandomImages() {
    const newChoices = [];
    for (let i = 0; i < 6; i++) {
      newChoices.push(`./paintings/img_${Math.floor(Math.random()*311)}.jpg`);
    }
    setChoices(newChoices);
  }

  useEffect(() => {
    changeRandomImages();
  }, []);

  function toggleVisibility() {
    setVisible(!visible);
  }

  return (
    <div className="parent">
      <img
        className="div1 main-image"
        src={mainImage}
        onClick={toggleVisibility}
      />
      {choices.map((choice, index) => (
        <img
          key={index}
          className={`div${index + 2} choices`}
          src={choice}
          onClick={() => changeMainImage(choice)}
          style={{ display: visible ? 'block' : 'none' }}
        />
      ))}
    </div>
  );
}

export default ImageGallery;

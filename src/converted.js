import React, { useState, useEffect} from 'react';

function ImageGallery() {
    const [mainImage, setMainImage] = useState(`react-gh-pages/paintings/img_${Math.floor(Math.random()*311)}.jpg`);
    const [choices, setChoices] = useState([]);
    const [visible, setVisible] = useState(false);

    function changeMainImage(img) {
		setMainImage(img);
		changeRandomImages();
    }

    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const nextimg = (i) => `images/img_${ i || random(10,32)}.jpg`;
    if (!Array.prototype.shuffle) {
        Object.defineProperty(Array.prototype, 'shuffle', {
            value: function() {
                for (let i = this.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [this[i], this[j]] = [this[j], this[i]];
                }
                return this;
            }
        });
    }

    // Generate a pool of random numbers and image URLs at the start of the application
    const pool = Array.from({ length: 300 }, (_, i) => ({
        number: i,
        url: `react-gh-pages/paintings/img_${i}.jpg`
    }));


    function changeRandomImages() {
        // Select 6 random items from the pool
		const newChoices = shuffle(pool).slice(0, 6);
		
		// only the URLs are needed
		setChoices(newChoices.map(i => i.url));
    }

    // helper function to shuffle the pool
    function shuffle(array) {
      	for (let i = array.length - 1; i > 0; i--) {
          	const j = Math.floor(Math.random() * (i + 1));
          	[array[i], array[j]] = [array[j], array[i]];
      	}
      	return array;
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

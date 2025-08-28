import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

function Card({ data }) {
  return (
    <>
      <h1>{data.name}</h1>

      {/* React Image Magnify Component */}
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: `Image of ${data.name}`,
           
            src: `https://stylocart.onrender.com/uploads/${data.image}`,
            width: 200,
            height: 200,
          },
          largeImage: {
            src: `https://stylocart.onrender.com/uploads/${data.image}`,
            width: 500,
            height: 800,
          },
        }}
      />
    </>
  );
}

export default Card;

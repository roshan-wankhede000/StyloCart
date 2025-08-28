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
           
            src: `http://localhost:3000/uploads/${data.image}`,
            width: 200,
            height: 200,
          },
          largeImage: {
            src: `http://localhost:3000/uploads/${data.image}`,
            width: 500,
            height: 800,
          },
        }}
      />

      {/* Regular image fallback or additional use */}
      {/* <img src={`http://localhost:3000/uploads/${data.image}`} alt={data.name} /> */}
    </>
  );
}

export default Card;

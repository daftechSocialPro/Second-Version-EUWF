import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'


import './gallery.css'
function Gallery() {
  const { t } = useTranslation()
  const images = [
    '/assets/images/back11.jpg',
    '/assets/images/back11.jpg',
    '/assets/images/back11.jpg',
    '/assets/images/back11.jpg',
    '/assets/images/back11.jpg',
   
    // Add more image paths here
  ];
  return (
    <>
      <section
        className="page-header"
        style={{ backgroundImage: "url(/assets/images/back11.jpg)" }}
      >
        <div className="container">
          <ul className="list-unstyled breadcrumb-one">
            <li>
              <a href="index.html">Media</a>
            </li>
            <li>
              <span>Photo Gallery</span>
            </li>
          </ul>

          <h2 className="page-header__title">Photo Gallery</h2>
        </div>
      </section>
      <section className="secc">
      <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img id={"imgid"}src={image} alt={`Image ${index + 1}`}  />
        </div>
      ))}
    </div>
      </section>
    </>
  );
}

export default Gallery;

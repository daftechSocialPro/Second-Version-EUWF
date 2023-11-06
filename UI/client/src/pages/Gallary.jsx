import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'
import { assetUrl,urlGallery } from "../endpoints";
import axios from "axios";
import './gallery.css'
function Gallery() {
  const { t } = useTranslation()
  const [gallery, setGallery] = useState([]);
  const [touchedImage, setTouchedImage] = useState(null);

  const handleImageTouch = (title) => {
    setTouchedImage(title);
  };
  const getImage = (item) => {
    return `${assetUrl}/${item}`;
  };
  useEffect(()=>{
    axios
    .get(urlGallery)
    .then((res) => {
      setGallery(res.data);
      console.log('setGallery', res.data)
    })
    .catch((err) => console.error(err));
  },[])
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
      {gallery.map((image, index) => (
        <div
          key={index}
          className="gallery-item"
          onClick={() => handleImageTouch(image.title)}
        >
          <img src={getImage(image.imagePath)} alt="" />
          {image.title === touchedImage && (
            <div className="title-overlay">{image.title}</div>
          )}
        </div>
      ))}
    </div>
      </section>
    </>
  );
}

export default Gallery;

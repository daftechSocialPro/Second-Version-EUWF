import React, { useState, useEffect } from "react";
import { assetUrl, urlTraining } from "../endpoints";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./training.css";

function Training() {
  const [training, setTraining] = useState([]);

  useEffect(() => {
    axios
      .get(urlTraining)
      .then((res) => {
        console.log(res.data, "training");
        setTraining(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const getImage = (item) => {
    return `${assetUrl}/${item}`;
  };

  const getVideo = (item) => {
    return `${assetUrl}/${item}`;
  };

  const isImage = (path) => {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    const extension = path.substring(path.lastIndexOf(".")).toLowerCase();
    return imageExtensions.includes(extension);
  };

  const handleDownload = (filePath, isImage) => {
    const link = document.createElement("a");
    link.href = `${assetUrl}/${filePath}`;
    link.download = isImage ? filePath.substring(filePath.lastIndexOf("/") + 1) : "Download";
    link.click();
  };

  return (
    <>
      <section
        className="page-header"
        style={{ backgroundImage: "url(/assets/images/back11.jpg)" }}
      >
        <div className="container">
          <ul className="list-unstyled breadcrumb-one">
            <li>
              <a href="index.html">Services</a>
            </li>
            <li>
              <span>Trainings & Capacity Building</span>
            </li>
          </ul>

          <h2 className="page-header__title">Trainings & Capacity Building</h2>
        </div>
      </section>
      <section className="sec-pad-top sec-pad-bottom about-one">
        <div className="tutorial">
          {training.map((train, index) => (
            <div className="card" key={index}>
              <div className="card-header">{train.title}</div>
              <div className="card-content">
                <div dangerouslySetInnerHTML={{ __html: train.description }}></div>
              </div>
              <div className="video-container">
                {train.mediaPath && isImage(train.mediaPath) ? (
                  <img src={getImage(train.mediaPath)} alt="" />
                ) : (
                  <video
                    src={getVideo(train.mediaPath)}
                    controls
                    autoPlay
                    width={300} 
                    height={160} 
                  ></video>
                )}
              </div>
              <div className="card-footer">
                <button
                  className="download-link "
                  onClick={() => handleDownload(train.mediaPath, isImage(train.mediaPath))}
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Training;
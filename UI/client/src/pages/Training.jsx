import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { urlSponsor, assetUrl } from "../endpoints";
import { OrganizationChart } from "primereact/organizationchart";
import { useTranslation } from "react-i18next";
import { urlContact } from "../endpoints";
import axios from "axios";

import "./training.css";
function About() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    axios
      .get(urlContact)
      .then((res) => {
        console.log(res.data);
        setContact(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const getImage = (item) => {
    return `${assetUrl}/${item}`;
  };
  const { t } = useTranslation();

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
        {/* <div className="containerrr">
          <div className="columnnn">
            <img src="/assets/images/back11.jpg" className="imgg" alt="Image" />
            <video src="path/to/video.mp4" className="vidd" controls></video>
          </div>
          <div className="columnnn">
            <h2 className="title">Title</h2>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="path/to/pdf.pdf" className="apdf" download>
              Download PDF
            </a>
          </div>
        </div> */}
        <div className="tutorial">
          <div class="card">
            <div class="card-header">HTML Tutorial</div>
            <div class="card-content">
              <p>This tutorial covers the basics of HTML.</p>
            </div>
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                frameborder="0"
                allowfullscreen
              ></iframe>
              <img src="path/to/html_tutorial_image.jpg" alt="HTML Tutorial" />
            </div>
            <div class="card-footer">
              <a
                class="download-link"
                href="path/to/html_tutorial.pdf"
                download
              >
                Download PDF
              </a>
            </div>
          </div>

          <div class="card">
            <div class="card-header">CSS Tutorial</div>
            <div class="card-content">
              <p>This tutorial covers the basics of CSS.</p>
            </div>
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                frameborder="0"
                allowfullscreen
              ></iframe>
              <img src="path/to/css_tutorial_image.jpg" alt="CSS Tutorial" />
            </div>
            <div class="card-footer">
              <a class="download-link" href="path/to/css_tutorial.pdf" download>
                Download PDF
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-header">HTML Tutorial</div>
            <div class="card-content">
              <p>This tutorial covers the basics of HTML.</p>
            </div>
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                frameborder="0"
                allowfullscreen
              ></iframe>
              <img src="path/to/html_tutorial_image.jpg" alt="HTML Tutorial" />
            </div>
            <div class="card-footer">
              <a
                class="download-link"
                href="path/to/html_tutorial.pdf"
                download
              >
                Download PDF
              </a>
            </div>
          </div>

          <div class="card">
            <div class="card-header">CSS Tutorial</div>
            <div class="card-content">
              <p>This tutorial covers the basics of CSS.</p>
            </div>
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                frameborder="0"
                allowfullscreen
              ></iframe>
              <img src="path/to/css_tutorial_image.jpg" alt="CSS Tutorial" />
            </div>
            <div class="card-footer">
              <a class="download-link" href="path/to/css_tutorial.pdf" download>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

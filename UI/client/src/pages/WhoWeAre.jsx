import React,{useState,useEffect} from "react";
import OwlCarousel from "react-owl-carousel";
import {useTranslation} from 'react-i18next'
import { urlContact } from "../endpoints";
import axios from "axios";
function About() {
  const [contact, setContact] = useState([])

  useEffect(() => {
    axios
      .get(urlContact)
      .then((res) => {
        console.log(res.data)
        setContact(res.data)})
      .catch((err) => console.log(err))
  }, [])


  const{t} =useTranslation()

  return (
    <>
      <section
        className="page-header"
        style={{ backgroundImage: "url(/assets/images/back11.jpg)"  }}
      >
        <div className="container">
          <ul className="list-unstyled breadcrumb-one">
            <li>
              <a href="index.html">About</a>
            </li>
            <li>
              <span>Who We Are</span>
            </li>
          </ul>

          <h2 className="page-header__title">Who We Are</h2>
        </div>
      </section>
      <section className="sec-pad-top sec-pad-bottom about-one">
        <div className="about-one__shape-1 float-bob-y">
          <img src="/assets/images/shapes/about-1-1.png" alt="" />
        </div>
        <div className="about-one__shape-2 float-bob-x">
          <img src="/assets/images/shapes/about-1-2.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-one__images wow fadeInLeft"
                data-wow-duration="1500ms"
              >
                <img
                  src="/assets/images/who1.jpg"
                  style={{ maxWidth: "585px" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-one__content">
                <div className="sec-title">
                  <p className="sec-title__tagline">
                    {t("welcome.1")}
                  </p>
                  <h2 className="sec-title__title">{t("whoweare.1")}</h2>
                </div>
                <div className="about-one__tagline">
                {t("welcome.2")}
                </div>
                <p className="about-one__tagline">
                 {t("welcome.3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

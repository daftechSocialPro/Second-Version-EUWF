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
        style={{ backgroundImage: "url(/assets/images/backgrounds/1.jpeg)" }}
      >
        <div className="container">
          <ul className="list-unstyled breadcrumb-one">
            <li>
              <a href="index.html">About</a>
            </li>
            <li>
              <span>Chairman Message</span>
            </li>
          </ul>

          <h2 className="page-header__title">Chairman Message</h2>
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
                  src="/assets/images/backgrounds/4.jpeg"
                  style={{ maxWidth: "485px" }}
                  alt=""
                />
                <img
                  //src="/assets/images/backgrounds/3.jpeg"
                  style={{ maxWidth: "275px" }}
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
                {/* <ul className="list-unstyled about-one__list">
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Donate to Poors
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Deserving People
                  </li>
                </ul> */}
                <div className="about-one__tagline">
                {t("welcome.2")}
                </div>
                <p className="about-one__text">
                 {t("welcome.3")}
                </p>
                <div className="about-one__meta clearfix">
                  <img src="/assets/images/testimonals/muktar.png" style={{height:'91px'}} alt="" />
                  <h3 className="about-one__name"> Muktar Ahmed</h3>

                  <p className="about-one__designation"> Director General of EUWF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

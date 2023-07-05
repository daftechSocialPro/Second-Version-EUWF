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
  const option3 = {
    items: 1,
    margin: 0,
    autoplay: true,
    nav: false,
    dots: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
        margin: 30,
      },
    },
  };
  const option6 = {
    container: "#sponsor-carousel-1",
    loop: true,
    autoplay: true,
    dots: false,
    items: 2,
    gutter: 30,
    mouseDrag: true,
    touch: "true",
    nav: false,

    controls: false,
    responsive: {
      0: {
        items: 2,
        gutter: 30,
        margin: 30,
      },
      576: {
        items: 3,
        gutter: 30,
        margin: 30,
      },
      768: {
        items: 4,
        gutter: 30,
        margin: 30,
      },
      992: {
        items: 5,
        gutter: 50,
        margin: 40,
      },
      1200: {
        items: 5,
        gutter: 140,
        margin: 50,
      },
    },
  };

  const option7 = {
    container: "#testimonials-one-carousel-1",
    loop: true,
    autoplay: true,
    items: 1,
    gutter: 0,
    mouseDrag: true,
    touch: 'true',
    nav: false,
    autoplaybuttonoutput: 'false',
    controls: false,
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
              <a href="index.html">About</a>
            </li>
            <li>
              <span>Vision</span>
            </li>
          </ul>

          <h2 className="page-header__title">Vision</h2>
        </div>
      </section>
      <section className="sec-pad-top sec-pad-bottom donation-two">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-md-12 col-lg-6">
            <div className="sec-title">
                <p className="sec-title__tagline">Change everything</p>
                <h2 className="sec-title__title">OBJECTIVE</h2>
              </div>
            <div
                    className="donation-card-two"
                    style={{ accentColor: "#fdbe44", marginTop:"-40px"}}
                  >
            
              <ul className="list-unstyled about-two__list" style={{color:"var(--paroti-black, #144047)"}}>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        {t("objectives.2")}
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        {t("objectives.3")}
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        {t("objectives.4")}
                      </li>
                    </ul>
            </div>
            </div>
            <div className="col-md-12 col-lg-6" style={{marginTop:"250px"}}>
              <div className="sec-title">
                <h2 className="sec-title__title" style={{fontSize:"50px", marginTop:"20px"}}>OUR CORE VALUE</h2>
              </div>
              <div
                    className="donation-card-two"
                    style={{ accentColor: "#fdbe44", marginTop:"-40px" }}
                  >
              <ul className="list-unstyled about-two__list" style={{color:"var(--paroti-black, #144047)"}}>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        {t("corevalues.2")}
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        {t("corevalues.3")}
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        {t("corevalues.4")}
                      </li>
                    </ul>
                    </div>
            </div>        
          </div>
        </div>
      </section>
 </>
  );
}

export default About;

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
        style={{ backgroundImage: "url(/assets/images/testimonals/back.jpg)" }}
      >
        <div className="container">
          <ul className="list-unstyled breadcrumb-one">
            <li style={{color:"#0f83c6", fontWeight:"bold", fontSize:"20px"}}>
              <a href="index.html">About</a>
            </li>
            <li style={{color:"#0f83c6", fontWeight:"bold", fontSize:"20px"}}>
              <span>Vision</span>
            </li>
          </ul>

          <h2 className="page-header__title">Vision</h2>
        </div>
      </section>
      <section className="sec-pad-top sec-pad-bottom donation-two">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-md-12 col-lg-4">
              <div className="sec-title">
                <p className="sec-title__tagline">Change everything</p>
                <h2 className="sec-title__title">OUR VISSION</h2>
              </div>
              <p className="donation-two__text">
                To become the first and competent association in east Africa by
                providing support for water supply and Sanitation Utilities
                through capacity building and provide training on new
                technologies that will lead Water utilities for an outstanding
                performance.
              </p>
            </div>
            <div className="col-md-12 col-lg-4" style={{marginTop:"150px"}}>
              <div className="sec-title">
                <h2 className="sec-title__title">OUR MISSION</h2>
              </div>
              <p className="donation-two__text">
                To become the first and competent association in east Africa by
                providing support for water supply and Sanitation Utilities
                through capacity building and provide training on new
                technologies that will lead Water utilities for an outstanding
                performance.
              </p>
            </div>
            <div className="col-md-12 col-lg-4" style={{marginTop:"200px"}}>
              <div className="sec-title">
                <h2 className="sec-title__title" >OUR MOTTO</h2>
              </div>
              <p className="donation-two__text">
                To become the first and competent association in east Africa by
                providing support for water supply and Sanitation Utilities
                through capacity building and provide training on new
                technologies that will lead Water utilities for an outstanding
                performance.
              </p>
            </div>
          
          </div>
        </div>
      </section>
 </>
  );
}

export default About;

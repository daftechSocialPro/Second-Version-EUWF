import React,{useState,useEffect} from "react";
import OwlCarousel from "react-owl-carousel";
import {useTranslation} from 'react-i18next'
function About() {
  const{t} =useTranslation()
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
              <span>Core Value & Objectives</span>
            </li>
          </ul>

          <h2 className="page-header__title">Core Value & Objectives</h2>
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

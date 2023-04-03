import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";   
import { OrganizationChart } from 'primereact/organizationchart'   
import { useTranslation } from 'react-i18next'
import { urlContact } from "../endpoints";
import axios from "axios";
function About() {
  const [contact, setContact] = useState([])

  useEffect(() => {
    axios
      .get(urlContact)
      .then((res) => {
        console.log(res.data)
        setContact(res.data)
      })
      .catch((err) => console.log(err))
  }, [])


  const { t } = useTranslation()
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
  const [data] = useState([
    {
        label: 'Argentina',
        expanded: true,
        children: [
            {
                label: 'Argentina',
                expanded: true,
                children: [
                    {
                        label: 'Argentina'
                    },
                    {
                        label: 'Croatia'
                    }
                ]
            },
            {
                label: 'France',
                expanded: true,
                children: [
                    {
                        label: 'France'
                    },
                    {
                        label: 'Morocco'
                    }
                ]
            }
        ]
    }
]);
  
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
        style={{ backgroundImage: "url(/assets/images/backgrounds/1.jpeg)" }}
      >
        <div className="container">
          <ul className="list-unstyled breadcrumb-one">
            <li>
              <a href="index.html"> {t("home.1")}</a>
            </li>
            <li>
              <span>{t("aboutus.1")}</span>
            </li>
          </ul>

          <h2 className="page-header__title">{t("aboutus.1")}</h2>
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
                  <img src="/assets/images/testimonals/muktar.png" style={{ height: '91px' }} alt="" />
                  <h3 className="about-one__name"> {t("testimonials.2")}</h3>

                  <p className="about-one__designation">{t("testimonials.3")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-pad-top sec-pad-bottom testimonials-one my-5" > 
      <div
          className="testimonials-one__bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/testimonials-1-bg.jpg)",
          }}
        ></div>
        <div className="container">
        <div className="row gutter-y-60">
            <div className="col-lg-5">
              <div className="testimonials-one__content">
                <div className="sec-title">
                  <p className="sec-title__tagline">Our Organizational Structure</p>
                  <h2 className="sec-title__title">
                    Organizational <br />
                   Structure
                  </h2>
                </div>
                <p className="testimonials-one__text">
                  Proin a lacus arcu. Nullam id dui eu orci maximus. <br />
                  Cras at auctor lectus, pretium tellus.
                </p>
               
              </div>
            </div>
            <div className="col-lg-7">
            <div className=" overflow-x-auto">
            <OrganizationChart value={data} />
        </div>
            </div>
          </div>
     
        </div>
     
      </section>

      <section className="sec-pad-top sec-pad-bottom donation-two">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-md-12 col-lg-4">
              <div className="sec-title">
                <p className="sec-title__tagline">{t("vision.1")}</p>
                <h2 className="sec-title__title">{t("vision.2")}</h2>
              </div>
              <p className="donation-two__text">
              {t("vision.3")}
              </p>
            </div>
            <div className="col-md-12 col-lg-8">
              <OwlCarousel className="owl-theme " {...option3}>
                <div className="item">
                  <div className="donation-card-two">
                    <div className="donation-card-two__bg"></div>
                    <h3 className="donation-card-two__title">
                      <a href="donation-details.html">{t("corevalues.1")}</a>
                    </h3>

                    <ul className="list-unstyled about-two__list donation-card-two__title ">
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

                    <a href="donation-details.html">
                      <i className="fa fa-angle-double-right donation-card-two__link"></i>
                    </a>

                    <div className="donation-card-two__shape"></div>
                  </div>
                </div>
                <div className="item">
                  <div
                    className="donation-card-two"
                    style={{ accentColor: "#fdbe44" }}
                  >
                    <div className="donation-card-two__bg"></div>
                    <h3 className="donation-card-two__title">
                      <a href="donation-details.html">{t("objectives.1")}</a>
                    </h3>

                    <ul className="list-unstyled about-two__list">
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

                    <a href="donation-details.html">
                      <i className="fa fa-angle-double-right donation-card-two__link"></i>
                    </a>
                    <div className="donation-card-two__shape"></div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="funfact-one funfact-one--m-margin-top">
        <div className="container">
          <div className="funfact-one__inner wow fadeInUp">
            <div className="funfact-one__item">
              <h3 className="count-box funfact-one__title">
                <span
                  data-stop="4850"
                  data-speed="1500"
                  className="count-text"
                ></span>
              </h3>
              <p className="funfact-one__text">{t("total.1")}</p>
            </div>
            <div className="funfact-one__item">
              <h3 className="count-box funfact-one__title">
                <span
                  data-stop="3456"
                  data-speed="1500"
                  className="count-text"
                ></span>
              </h3>
              <p className="funfact-one__text">{t("total.2")}</p>
            </div>
            <div className="funfact-one__item">
              <h3 className="count-box funfact-one__title">
                <span
                  data-stop="480"
                  data-speed="1500"
                  className="count-text"
                ></span>
              </h3>
              <p className="funfact-one__text">{t("total.3")}</p>
            </div>
            <div className="funfact-one__item">
              <h3 className="count-box funfact-one__title">
                <span
                  data-stop="2068"
                  data-speed="1500"
                  className="count-text"
                ></span>
              </h3>
              <p className="funfact-one__text">{t("total.4")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pad-top sec-pad-bottom testimonials-one my-5">
        <div
          className="testimonials-one__bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/testimonials-1-bg.jpg)",
          }}
        ></div>

        <div className="testimonials-one__gallery">
          <img
            src="/assets/images/resources/UserProfile.png"

            className="float-bob-x"
            alt=""
          />
          <img
            src="/assets/images/resources/UserProfile.png"
            className="float-bob-y"
            alt=""
          />
          <img
            src="/assets/images/resources/UserProfile.png"
            className="float-bob-x"
            alt=""
          />
          <img
            src="/assets/images/resources/UserProfile.png"
            className="float-bob-y"
            alt=""
          />
          <img
            src="/assets/images/resources/UserProfile.png"
            className="float-bob-x"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-5">
              <div className="testimonials-one__content">
                <div className="sec-title">
                  <p className="sec-title__tagline">{t("feedbacks.1")}</p>
                  <h2 className="sec-title__title">
                  {t("feedbacks.2")} <br />
                  {t("feedbacks.3")}
                  </h2>
                </div>
                <p className="testimonials-one__text">
                  Proin a lacus arcu. Nullam id dui eu orci maximus. <br />
                  Cras at auctor lectus, pretium tellus.
                </p>
               
                <a href="#" className="thm-btn testimonials-one__btn">
                  <span>{t("feedbacks.5")}</span>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              {contact.length && <OwlCarousel
                className="thm-tns__carousel"
                id="testimonials-one-carousel-1"
                {...option7}
              >
                {contact.map((item, index) => {
                  return (<div key={index} className="item">
                    <div className="testimonials-card">
                      <i className="paroti-icon-quote testimonials-card__icon"></i>
                      {/* <img
                        //  src="/assets/images/resources/UserProfile.png"
                        style={{ maxWidth: '2px' }}
                        className="testimonials-card__bg"
                        alt=""
                      /> */}
                      <p className="testimonials-card__text">
                        {item.message}
                      </p>
                      <div className="testimonials-card__meta clearfix" >
                        <img src="/assets/images/resources/testi-1-1.png" style={{"maxWidth": "50px"}} alt="" />
                        <h3 className="testimonials-card__name">{item.name}</h3>

                        <p className="testimonials-card__designation">{item.subject}</p>
                      </div>
                    </div>
                  </div>)

                }


                )}

              </OwlCarousel>}
            </div>
          </div>
        </div>
      </section>


      <section className="sec-pad-top sec-pad-bottom sponsor-carousel sponsor-carousel--home-2">
        <div className="container">
          <OwlCarousel className="owl-theme " {...option6}>
            <div className="item">
              <img src="/assets/images/partner/s1.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/partner/s2.png" alt="" />
            </div>{" "}
            <div className="item">
              <img src="/assets/images/partner/s3.png" alt="" />
            </div>{" "}
            <div className="item">
              <img src="/assets/images/partner/s4.png" alt="" />
            </div>{" "}
            <div className="item">
              <img src="/assets/images/partner/s5.png" alt="" />
            </div>{" "}
            <div className="item">
              <img src="/assets/images/partner/s6.png" alt="" />
            </div>{" "}
            <div className="item">
              <img src="/assets/images/partner/s7.png" alt="" />
            </div>{" "}
            <div className="item">
              <img src="/assets/images/partner/s8.png" alt="" />
            </div>{" "}
            <div className="item">
              <img src="/assets/images/partner/s9.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/partner/s10.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/partner/s11.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/partner/s12.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/partner/s13.png" alt="" />
            </div>{" "}
            <div className="item">
              <img src="/assets/images/partner/s14.png" alt="" />
            </div>
          </OwlCarousel>
        </div>
      </section>
    </>
  );
}

export default About;

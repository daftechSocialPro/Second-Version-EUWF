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
        style={{ backgroundImage: "url(/assets/images/testimonals/back.jpg)" }}
      >
        <div className="container">
          <ul className="list-unstyled breadcrumb-one">
            <li style={{color:"#0f83c6", fontWeight:"bold", fontSize:"20px"}}>
              <a href="index.html">About</a>
            </li>
            <li style={{color:"#0f83c6", fontWeight:"bold",  fontSize:"20px"}}>
              <span>Chairman Message</span>
            </li>
          </ul>

          <h2 className="page-header__title">Chairman Message</h2>
        </div>
      </section>
      <section className="sec-pad-top sec-pad-bottom about-one">
              <div className="container">
          <div className="row">
                     <div className="col-lg-12">
              <div className="about-one__content">
                <div className="sec-title">
                  <p className="sec-title__tagline">
                    {t("welcome.1")}
                  </p>
                  <h2 className="sec-title__title" style={{fontWeight:400, letterSpacing:1}}>Message from our director</h2>
                </div>
                              <div className="about-one__tagline" style={{fontWeight:"500", fontSize:"15px", textAlign:"justify", paddingRight:"150px"}}>
                14 years ago @ Wolkite Town on Tefera Hotel during dinner time there was a noble idea raised to established National Water forum to create the Utilities as a platform to bring effective, efficient, modernized & sustainable service delivery through experience sharing among each other and Capacity Building of the Utilities on the round table discussion. The first idea was provock by Ato Petros T/wold who is the former Wlokite Town Water Supply and Sewerage Enterprise Manager. The idea is supported by Ato Yitbarek Tessema Who is the former World Bank Country Directorate Gulilat Birhane who is the Consultancy in Metaferiya Consultance,Ato Ashenafi Kibret who is Metaferiya Consulancy,Ato Eyob Defere who is the Consultancy of Eyob Defere Management and finally the idea was seconded by Ato Bushira Mohammed who is the public retionship head of Harar Water and Sewerage Athority.After many discussion they have  reached to an agreement to establish the Ethiopian Water Forum to achieve the above mentioned objectives. Moreover, To Petros T/wold was collect and organized the voluntary Utilities by traveling in different regions/Utilities across the Country. Finally, the first Assembly was   hosted in Wolkite Town Water Supply and Sewerage Service Enterprise and the National Water Forum was established in 1999 E.C.
Now a days, I am proud of the National Water Forum developed into the name of Ethiopian Urban Water Federation which is serves as a platform and an Umbrella of all Ethiopian Utilities by exercising Key Performance Indicators and Benchmarking as well as Management Information System to bring an effective, efficient, modernized & sustainable service delivery of the Utilities.
Many thanks those who have contributed to establish the National Water.
Namely: - H.E. Ambasssdor Assifaw Dingamo, Ato Yitbarek Tessema,Ato Gulilat Birhane,Ato Ashenafi Kibret,Ato Eyob Defere,Ato Bushira Mohammed,W/ro Girmawit Haile,Ato Abduselam Yideg(PUT),Jemal Reshid,Ato Gidena Abebe,and others.
                </div>
              
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

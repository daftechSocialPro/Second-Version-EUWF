import React, { useState, useEffect, useMemo } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import axios from "axios";
import { Link } from 'react-router-dom'
import { assetUrl, urlNews, urlSponsor } from "../endpoints";
import { useNavigate } from 'react-router-dom';
import dateformat from 'dateformat';
import { useTranslation } from 'react-i18next';

import Pagination from '../components/Pagination'

let PageSize = 6

function News() {
  const [news, setNews] = useState([]);
  const [sponser, setSponser] = useState([])
  const { t } = useTranslation()

  const [currentPage, setCurrentPage] = useState(1)


  const navigate = useNavigate()
  // eyanagerkeng nberawo lmn dnnew  react-reduc x yatenahut  ena mn yeshalal 

  const getImage = (item) => {
    return `${assetUrl}/${item}`;
  };



  useEffect(() => {

    axios.get(urlSponsor + "/bySupportType?supportType=0").then((res) => {
      setSponser(res.data)
    })
  }, [])

  useEffect(() => {
    axios
      .get(urlNews)
      .then((res) => {
        setNews(res.data);
        console.log('newsdata', res.data)
      })
      .catch((err) => console.error(err));
  }, []);


  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return news.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, news])



  const search = (item) => {
    axios
      .get(urlNews)
      .then((res) => {
        setNews(res.data.filter(x => x.title.contains(item)));
      })
      .catch((err) => console.error(err));



  }


  const navigateNewsDetial = (item) => {

    navigate('detail', {
      state: {
        news: item,
        newsList: news
      }
    }
    )

  }
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

  return (
    <>
      <section
        className="page-header"
        style={{ backgroundImage: "url(/assets/images/back11.jpg)" }}
      >
        <div className="container">
          <ul className="list-unstyled breadcrumb-one">
            <li>
              <Link to="/">{t("home.1")}</Link>
            </li>
            <li>
              <span> {t("news.1")}</span>
            </li>
          </ul>

          <h2 className="page-header__title">{t("news.1")}</h2>
        </div>
      </section>
      <section className="sec-pad-top sec-pad-bottom">
        <div className="container">
          <div className="row gutter-y-30">

            {currentTableData.map((item, index) =>
         <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                <div className="blog-card">
                  <div className="blog-card__image">
                    <img src={getImage(item.img)} alt="" />
                    <div className="blog-card__date">
                      <span>{dateformat(item.createdAt, "d")}</span>{dateformat(item.createdAt, "mmm")}
                    </div>
                  </div>
                  <div className="blog-card__content">
                    <ul className="blog-card__meta list-unstyled">
                      <li>
                        <i className="fa fa-user"></i>
                        <a onClick={() => navigateNewsDetial(item)} >by {item.waterFederation.fullName}</a>
                      </li>
                      {/* <li>
                        <i className="fa fa-comments"></i>
                        <a href="#">02 comments</a>
                      </li> */}
                    </ul>
                    <h3 className="blog-card__title"><a onClick={() => navigateNewsDetial(item)}>{item.title}</a></h3>
                    <a onClick={() => navigateNewsDetial(item)} className="blog-card__links">
                      <i className="fa fa-angle-double-right"></i>
                      Read More</a>
                  </div>
                </div>
              </div>
            )}

<Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={news.length}
                  pageSize={PageSize}
                  onPageChange={(page) => setCurrentPage(page)}
                />

          </div>
        </div>
      </section>
      <section className="sec-pad-top sec-pad-bottom sponsor-carousel sponsor-carousel--home-2">
        <div className="container">
          <OwlCarousel className="owl-theme " {...option6}>

            {sponser.length && sponser.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <a href={item.webLink}> <img src={getImage(item.logo)} alt="" /></a>
                 
                </div>
              )
            })}
            {/* <div className="item">
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
            </div> */}
          </OwlCarousel>
        </div>
      </section>

    </>
  );
}

export default News;

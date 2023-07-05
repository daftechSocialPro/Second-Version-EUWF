import React, { useState, useEffect, useMemo } from "react";
import OwlCarousel from "react-owl-carousel";
import { assetUrl, urlNews, urlSponsor } from "../endpoints";
import { useTranslation } from 'react-i18next'
import axios from "axios";
import dateformat from "dateformat";
import { useNavigate } from "react-router-dom";
import './about.css'
function About() {
  const [news, setNews] = useState([]);
  const [filterdList, setfilterdnewsList] =useState([]);
  const [newsList, setNewsList] = useState([]);
  const [sponser, setSponser] = useState([]);
  const  [searchParm,setSearchParam]= useState('')
  const { t } = useTranslation()

  const [currentPage, setCurrentPage] = useState(1)


  const navigate = useNavigate()
  // eyanagerkeng nberawo lmn dnnew  react-reduc x yatenahut  ena mn yeshalal 

  const getImage = (item) => {
    return `${assetUrl}/${item}`;
  };
  useEffect(()=>{

    setfilterdnewsList(
    newsList.filter(news => news.title.toLowerCase().includes(searchParm.toLowerCase()))
  )
  },[searchParm])
  const filterdStyle = ( index ) => {
    const buttonStyle = {
      backgroundColor: index%2===0 ? 'white' : '',
     
     
    };
    return buttonStyle;
  }
  


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
  const navigateNewsDetial = (item) => {

    navigate('detail', {
      state: {
        news: item,
        newsList: news
      }
    }
    )

  }
  let PageSize = 6
  
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return news.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, news])

  const [partenerShip,setPartnerShip] = useState([])

  useEffect(()=>{

    axios.get(urlSponsor+"/bySupportType?supportType=1").then((res)=>{
      setPartnerShip(res.data)
    })
  },[])
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
              <a href="index.html">Services</a>
            </li>
            <li>
              <span>Events</span>
            </li>
          </ul>

          <h2 className="page-header__title">Events</h2>
        </div>
      </section>
      <section className="sec-pad-top sec-pad-bottom" style={{marginTop:"-100px"}}>
        <div className="container">
          <div className="row gutter-y-30">

            {currentTableData.map((item, index) =>
         <div key={index} className="col-sm-12 col-md-6 col-lg-8">
    
                <div className="blog-details__content clearfix">
                  <div className="blog-details__image">
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
                   
                    </ul>
                    <h3 className="blog-card__title"><a onClick={() => navigateNewsDetial(item)}>{item.title}</a></h3>
                    <p>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                </p>
                  </div>
                </div>
              </div>
            )}
              <div className="col-lg-4"  style={{marginTop:"-600px", padding:" 0px 40px"}}>
              <div className="sidebar mb-4">
                <div className="sidebar__single sidebar__single--search">
                  <form action="#">
                    <input type="text" className="searhcInput" value={searchParm} onChange={(e)=>setSearchParam(e.target.value)}  placeholder="Search here.." />
                    <button type="submit">
                      <i className="paroti-icon-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
                <div className="sidebar__single sidebar__single--posts">
                  <h3 className="sidebar__title">Recent posts</h3>
                  <ul className="list-unstyled sidebar__post">
                    {filterdList.slice(0, 4).map((item, index) => (
                      <li key={index} style={filterdStyle(index)}>
                        <a onClick={()=>setNews(item)}>
                          <img
                            style={{ maxWidth: "70px" }}
                            src={getImage(item.img)}
                            alt=""
                          />
                          {/* <span className="sidebar__post__meta">
                            <i className="fa fa-comments"></i>
                            02 comments
                          </span> */}
                          <span className="sidebar__post__title">{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
{/* 
              {sponser.slice(0, 2).map((item, index) => {
              return (
                <div className="item containerr" key={index}  style={{marginLeft:"25%"}}   >
                  <img className="imgg" style={{width:"100%"}} src={getImage(item.logo)} alt="" />
                  <div class="overlay"><div class="buttonn"><a href={getImage(item.brocherPath)} target="_blank"> View Brocher </a></div></div>
                
                </div>
              )
            })} */}
            </div>


          </div>
        </div>
      </section>
   

    

    



      <section className="sec-pad-top sec-pad-bottom sponsor-carousel sponsor-carousel--home-2">
        <div className="container">
        {partenerShip.length && <OwlCarousel className="owl-theme " {...option6}>
          {partenerShip.map((item,index)=>{
              return(
                <div className="item" key={index}>
                <img src={getImage(item.logo)} alt="" />
              </div>
              )
            })}
            

          </OwlCarousel>}
        </div>
      </section>




    </>
  );
}

export default About;

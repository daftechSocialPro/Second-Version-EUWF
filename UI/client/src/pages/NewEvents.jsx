import React,{useRef} from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";  
import axios from "axios";
import { useState } from "react";
import { assetUrl, urlForum, urlNews, urlSponsor, urlSubscriber } from "../endpoints";
import dateformat from "dateformat";
import { useEffect } from "react";
import DOMPurify from "dompurify";
import { useTranslation } from 'react-i18next'
import {Link, useNavigate} from 'react-router-dom'

import { Toast } from 'primereact/toast';
import './forum.css'

function EForum() {

  const toast = useRef(null);

  const showToast = (type,summary,detail) => {
      toast.current.show({severity:type, summary: summary, detail:detail, life: 3000});
  }

  const { t } = useTranslation()
  const navigate = useNavigate()

  const [partenerShip,setPartnerShip] = useState([])




  const navigateNewsDetial =(item)=>{

    navigate('news/detail',{
      state :{
        news: item,
        newsList:news
      }
    }
    )
    
      }


      const navigateForumDetial=(item, itemList)=>{

        navigate('forum',{
          state :{
            forum: item,
            forumList: itemList
            
          }
        }
        )
      }
    

  const option3 = {
    items: 1,
    margin: 0,
    autoplay: false,
    nav: false,
    dots: false,
    loop: false,
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
  const option4 = {
    loop: true,
    autoplay: true,
    items: 1,
    dots: false,

    gutter: 0,
    mouseDrag: true,
    touch: "true",
    nav: false,

    controls: false,
    responsive: {
      0: {
        items: 1,
        gutter: 0,
      },
      576: {
        items: 1,
        gutter: 0,
      },
      768: {
        items: 3,
        gutter: 30,
      },
      992: {
        items: 3,
        //"gutter": 30,
        margin: 30,
      },
      1200: {
        items: 3,
        gutter: 30,
        margin: 10,
      },
    },
  };

 

  const [news, setNews] = useState([]);
  const [forum, setForum] = useState([]);

  useEffect(() => {
    axios
      .get(urlNews)
      .then((res) => setNews(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(urlForum)
      .then((res) => {

        console.log("forum", res.data)
        setForum(res.data)
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(()=>{

    axios.get(urlSponsor+"/bySupportType?supportType=1").then((res)=>
      setPartnerShip(res.data)
    )
  },[])



  const getImage = (item) => {
    return `${assetUrl}/${item}`;
  };

  const [subscribe, setSubscribe]= useState('');

 const subscribeEmail=()=>{
        if(subscribe!= ''){
          axios.post(urlSubscriber, {Email:subscribe
          }).then((res)=>{
            setSubscribe('')
           showToast('success','Success',res.data)
          }).catch(()=>{
            setSubscribe('')
            showToast('error','Error',"Something went wrong or Emial already Subscribed")
          })
        }
  }


  return (
    <>

<Toast ref={toast} />
<section
        className="page-header"
        style={{ backgroundImage: "url(/assets/images/back11.jpg)" }}
      >
        <div className="container">
          <ul className="list-unstyled breadcrumb-one">
            <li style={{color:"#0f83c6", fontWeight:"bold", fontSize:"20px"}}>
              <a href="index.html">Media</a>
            </li>
            <li style={{color:"#0f83c6", fontWeight:"bold", fontSize:"20px"}}>
              <span>Events & Forums</span>
            </li>
          </ul>

          <h2 className="page-header__title">Events & Forums</h2>
        </div>
      </section>
      <section className="sec-pad-top sec-pad-bottom">
        <div className="container">
          <div className="sec-title ">
            <p className="sec-title__tagline">{t("Events.1")}</p>
            <h2 className="sec-title__title">{t("Events.2")}</h2>
          </div>
          {/* {forum.map((item, index) => ( <h1>hello</h1>
              ))}  */}

          {/* <div className="donations-carousel">

            {forum.length && <OwlCarousel className="owl-theme" {...option4}>
              {forum.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="donations-card">
                      <div className="donations-card__image">
                        <img src={getImage(item.img)} alt="" />
                        <div className="donations-card__category">
                          <a onClick={()=>navigateForumDetial(item,forum)} >
                            {item.isForumEvent === 1 ? "Events" : "Forums"}
                          </a>
                        </div>
                      </div>
                      <div className="donations-card__content">
                        <h3 className="donations-card__title">
                          <a onClick={()=>navigateForumDetial(item,forum)}>{item.title}</a>
                        </h3>
                        <p className="donations-card__text"
                          dangerouslySetInnerHTML={{
                            __html: `${DOMPurify.sanitize(
                              item.description
                            ).slice(0, 100)}...`,
                          }}
                        >
                        </p>

                        <div className="donations-card__amount">
                          <p>
                            <span>{dateformat(item.createdAt, "mmm dS")}</span>
                          </p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              )}
            </OwlCarousel>}


          </div> */}
          
          <div className="forumcard">

            {forum.length && <div className="forums">
              {forum.map((item, index) => {
                return (
                  <div className="item" key={index}>
                      <div className="donations-card__image">
                        <img src={getImage(item.img)} alt="" />
                        <div className="donations-card__category">
                          <a onClick={()=>navigateForumDetial(item,forum)} >
                            {item.isForumEvent === 1 ? "Events" : "Forums"}
                          </a>
                        </div>
                     
                      <div className="donations-card__content">
                        <h3 className="donations-card__title">
                          <a onClick={()=>navigateForumDetial(item,forum)}>{item.title}</a>
                        </h3>
                        <p className="donations-card__text"
                          dangerouslySetInnerHTML={{
                            __html: `${DOMPurify.sanitize(
                              item.description
                            ).slice(0, 100)}...`,
                          }}
                        >
                        </p>

                        <div className="donations-card__amount">
                          <p>
                            <span>{dateformat(item.createdAt, "mmm dS")}</span>
                          </p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              )}
            </div>}


          </div>
        </div>
      </section>
    

   


    </>
  );
}

export default EForum;

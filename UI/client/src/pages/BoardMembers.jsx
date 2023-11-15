import React,{useEffect,useState} from "react";
import axios from 'axios'
import { assetUrl, urlboardmember } from "../endpoints";
import { useTranslation } from 'react-i18next'



function BoardMembers() { 

  const { t } = useTranslation()
  const [boardMember,setBoardMember]= useState([])


  useEffect(() => {
    axios.get(urlboardmember).then((res) =>{ setBoardMember(res.data)
    
  
  })
  }, [])

  const getImage=(item)=>{

    return `${assetUrl}/${item}`
  }

  return (
    <>
         <section
        className="page-header"
        style={{ backgroundImage: "url(/assets/images/backgrounds/1.jpeg)" }}
      >
        <div className="container">
          <ul className="list-unstyled breadcrumb-one">
            <li style={{color:"#0f83c6", fontWeight:"bold",  fontSize:"20px"}}>
              <a href="index.html">{t("home.1")}</a>
            </li>
            <li style={{color:"#0f83c6", fontWeight:"bold",  fontSize:"20px"}}>
              <span>{t("memberutilites.1")}</span>
            </li>
          </ul>
          <h2 className="page-header__title">{t("memberutilites.1")}</h2>
        </div>
      </section>
      {t("memberutilites.1")}
      </>
  );
}

export default BoardMembers;

import React, { useState, useEffect } from "react";
import { OrganizationChart } from 'primereact/organizationchart';
import { useTranslation } from 'react-i18next';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './about.css';


import './about.css'
function Org() {
  const { t } = useTranslation()
  const [data] = useState([
    {
      label: `${t('Organizational.4')}`,
      expanded: true,
      children: [

        {
          label: `${t('Organizational.5')}`,
          expanded: true,
          children: [
            {
              label: `${t('Organizational.6')}`,
              expanded: true,
              children: [
                {
                  label: `${t('Organizational.7')}`,
                },
                {
                  label:`${t('Organizational.8')}`,
                  expanded: true,
                  children: [
                    {
                      label:`${t('Organizational.9')}`
                    },
                    {
                      label:`${t('Organizational.10')}`
                    },
                    {
                      label: `${t('Organizational.11')}`
                    },
                    {
                      label: `${t('Organizational.12')}`
                    },
                    {
                      label: `${t('Organizational.13')}`
                    },
                    {
                      label: `${t('Organizational.14')}`
                    }
                  ]
                },
                {
                  label: `${t('Organizational.15')}`
                }
              ]
            }

          ]
        },
        {
          label: `${t('Organizational.16')}`,

        },


      ]
    }
  ]);
  return (
    <>
      <section
        className="page-header"
        style={{ backgroundImage: "url(/assets/images/testimonals/back.jpg)" }}
      >
        <div className="container">
          <ul className="list-unstyled breadcrumb-one">
            <li style={{color:"#0f83c6", fontWeight:"bold", fontSize:"20px"}}>
              <a href="index.html">Team</a>
            </li>
            <li style={{color:"#0f83c6", fontWeight:"bold", fontSize:"20px"}}>
              <span>Organization Structure</span>
            </li>
          </ul>

          <h2 className="page-header__title">{t("aboutus.1")}</h2>
        </div>
      </section>
     
      <section className="sec-pad-top sec-pad-bottom testimonials-one">
        <div
          className="testimonials-one__bg"
          style={{
            backgroundImage: "url(/assets/images/backgrounds/testimonials-1-bg.jpg)",
          }}
        ></div>
        <div className="testimonials-one__content">
          <div className="sec-title text-center">
            <h3 className="sec-title__title">
              {t("Organizational.1")}
            </h3>
            <p className="sec-title__tagline">{t("Organizational.2")}</p>
          </div>
        </div>
        {data.length > 0 && <OrganizationChart value={data} />}
      </section>
    </>
  );
}

export default Org;
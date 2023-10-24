import React, { useState, useEffect } from "react";
import { OrganizationChart } from 'primereact/organizationchart'
import { useTranslation } from 'react-i18next'


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
  // {
  //   label: 'Directors’ Board',
  //   expanded: true,
  //   children: [
  //       {
  //           label: 'France'
  //       },
  //       {
  //           label: 'Morocco'
  //       }
  //   ]
  // },



  return (
    <>
      <section
        className="page-header"
        style={{ backgroundImage: "url(/assets/images/back11.jpg)" }}
      >
        <div className="container">
          <ul className="list-unstyled breadcrumb-one">
            <li>
              <a href="index.html">Team</a>
            </li>
            <li>
              <span>Organization Structure</span>
            </li>
          </ul>

          <h2 className="page-header__title">{t("aboutus.1")}</h2>
        </div>
      </section>
     
      <section className="sec-pad-top sec-pad-bottom testimonials-one " >
        <div
          className="testimonials-one__bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/testimonials-1-bg.jpg)",
          }}
        ></div>
        <div className="testimonials-one__content">
          <div className="sec-title text-center ">
           
            <h3 className="sec-title__title">
            {t("Organizational.1")}
            </h3>
            <p className="sec-title__tagline">{t("Organizational.2")}</p>
          </div>


        </div>
        <OrganizationChart value={data} />

      </section>

    </>
  );
}

export default Org;

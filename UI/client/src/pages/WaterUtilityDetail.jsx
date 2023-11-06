import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { assetUrl } from "../endpoints";
import dateformat from "dateformat";

function WaterUtilityDetail() {
  const location = useLocation();
  const [waterutility, setWaterUtility] = useState(location.state?.waterUtility || {});
  const [waterUtilityList, setWaterUtilityList] = useState(location.state?.waterUtilityList || []);
  const [filteredWaterUtilityList, setFilteredWaterUtilityList] = useState(location.state?.waterUtilityList || []);
  const [searchParam, setSearchParam] = useState('');

  useEffect(() => {
    setFilteredWaterUtilityList(
      waterUtilityList.filter(waterutility =>
        waterutility.name.toLowerCase().includes(searchParam.toLowerCase())
      )
    );
    console.log("utiliii", waterutility)
  }, [searchParam, waterUtilityList]);

  const getImage = (item) => {
    return `${assetUrl}/${item}`;
  };

  const filterdStyle = (index) => {
    const buttonStyle = {
      backgroundColor: index % 2 === 0 ? 'white' : '',
    };
    return buttonStyle;
  };
  const formatDate = (date) => {
    if (date) {
      const dateParts = date.split("-");
      if (dateParts.length === 3) {
        const year = parseInt(dateParts[2]);
        const month = parseInt(dateParts[1]) - 1; 
        const day = parseInt(dateParts[0]);
        const parsedDate = new Date(year, month, day);
        if (!isNaN(parsedDate.getTime())) {
          return dateformat(parsedDate, "d mmm");
        }
      }
    }
    return "";
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
              <a href="index.html">Team</a>
            </li>
            <li>
              <span>Water Utility Detail</span>
            </li>
          </ul>

          <h2 className="page-header__title">Water Utility Detail</h2>
        </div>
      </section>
      <section className="sec-pad-top sec-pad-bottom blog-details">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-8">
              <div className="blog-details__content clearfix">
                <div className="row" style={{padding:"10px", background:"#fff",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", borderRadius:"10px"}} >
                  <div className="blog-details__image col-lg-5">
                  <div className="blog-card">
                    <div className="blog-card__image">
                      <a href="#">
                        <img src={getImage(waterutility.logo)} alt="" />
                      </a>
                      <div className="blog-card__date" style={{marginBottom:"-50px"}}>
          <span>{formatDate(waterutility.establisheddate)}</span>
        </div>
                    </div>
              
                    </div>
                
                  </div>
                  <div className="col-lg-7">
                    <h3 className="blog-card__title text-center ">{waterutility.name}</h3>
                    <div className="row">
                      <div className="col-6">
                        <ul className="blog-card__meta list-unstyled" style={{ display: "block", marginLeft: "20px" }}>
                          <li>
                            <i className="fa fa-phone"></i>
                            <a href="#">{waterutility.phone}</a>
                          </li>
                          <li>
                            <i className="fa fa-car"></i>
                            <a href="#">{waterutility.kmfromaa} KM from Addis</a>
                          </li>
                          <li>
                            <i className="fa fa-building"></i>
                            <a href="#">{waterutility.regionalWaterFederation.name}</a>
                          </li>
                          <li>
                            <i className="fa fa-users"></i>
                            <a href="#">{waterutility.noemployees} Employees</a>
                          </li>
                          <li>
                            <i className="fa fa-car"></i>
                            <a href="#"> from {waterutility.source}</a>
                          </li>
                          <li>
                            <i className="fa fa-envelope"></i>
                            <a href="#">{waterutility.webLink}</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className="blog-card__meta list-unstyled" style={{ display: "block" }}>
                          <li>
                            <i className="fa-solid fa-database"></i>
                            <a href="#">{waterutility.prodcapa} Production Capacity</a>
                          </li>
                          <li>
                            <i className="fa-solid fa-database"></i>
                            <a href="#">{waterutility.purification} Purification Capacity</a>
                          </li>
                          <ul className="blog-card__meta list-unstyled" style={{ display: "block" }}>
                            <li>
                              <i className="fa fa-bars"></i>
                              <a href="#">Main System Contains</a>
                            </li>
                            <li className="ms-4">
                              <i className="fa fa-angle-right"></i>
                              <a href="#">{waterutility.distributionkm} KM Distribution</a>
                            </li>

                            <li className="ms-4">
                              <i className="fa fa-angle-right"></i>
                              <a href="#">{waterutility.reservoircapacity} Reservoir Capacity</a>
                            </li>
                            <li className="ms-4">
                              <i className="fa fa-angle-right"></i>
                              <a href="#">{waterutility.reservoirnumbers} Reservoirs</a>
                            </li>
                            <li className="ms-4">
                              <i className="fa fa-angle-right"></i>
                              <a href="#">{waterutility.pumpstationnumbers} Pump Stations</a>
                            </li>
                            <li className="ms-4">
                              <i className="fa fa-angle-right"></i>
                              <a href="#">{waterutility.servedpopulation} Served Population</a>
                            </li>
                            <li className="ms-4">
                              <i className="fa fa-angle-right"></i>
                              <a href="#">{waterutility.servedzone} Served Zones</a>
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3" style={{marginLeft:"70px", background:"#fff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", borderRadius:"10px"}}>
            <div className="row">
              <div className="col-12" style={{marginBottom:"10px", marginTop:"10px"}}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    value={searchParam}
                    onChange={(e) => setSearchParam(e.target.value)}
                  />
                </div>
              </div>
            </div>
              {filteredWaterUtilityList.map((waterutility, index) => (
                <div className="col-lg-12 col-md-6" key={waterutility.id}>
                  <div  style={{padding:"10px", background:"rgba(3, 194, 255, 0.2)", borderRadius:"10px"}}  >
                    <div style={{display:"flex"}}>
                      <a href="#">
                        <img src={getImage(waterutility.logo)} alt="" width={50} height={50} />
                      </a>
                      <h3 style={{fontSize:"15px", marginLeft:"10px"}}>
                        <a href="#">{waterutility.name}</a>
                      </h3>
                    </div>
                  </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WaterUtilityDetail;
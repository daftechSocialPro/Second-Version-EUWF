import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'
import { assetUrl, urlTeam } from "../endpoints";
import axios from "axios";
import './team.css'
function Teem() {
  const [team, setTeam] = useState([]);
  const getImage = (item) => {
    return `${assetUrl}/${item}`;
  };
  useEffect(()=>{
    axios
    .get(urlTeam)
    .then((res) => {
      setTeam(res.data);
      console.log('setteam', res.data)
    })
    .catch((err) => console.error(err));
  },[])
    const { t } = useTranslation()
  return (
    <>
      <section
        className="page-header"
        style={{ backgroundImage: "url(/assets/images/back11.jpg)" }}
      >
        <div className="container">
          <ul className="list-unstyled breadcrumb-one">
            <li style={{color:"#0f83c6", fontWeight:"bold", fontSize:"20px"}}>
              <a href="index.html"> Team</a>
            </li>
            <li style={{color:"#0f83c6", fontWeight:"bold", fontSize:"20px"}}>
              <span>Team Profile</span>
            </li>
          </ul>

          <h2 className="page-header__title">Team Profile</h2>
        </div>
      </section>
    <div className="team-display">
      {team.map((member) => (
        <div key={member.id} className="team-member">
          <img src={getImage(member.imagePath)}  className="team-member-image" alt="" />
          <div className="team-member-name">{member.name}</div>
          <div className="team-member-position">{member.position}</div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Teem;


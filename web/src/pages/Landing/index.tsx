import React from "react";
import { Link } from 'react-router-dom';
 
import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyUcon from "../../assets/images/icons/study.svg";
import giveClassesUcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartUcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyUcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesUcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas{" "}
          <img src={purpleHeartUcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;

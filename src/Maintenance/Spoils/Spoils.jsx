import React, { useState } from "react";
import "./spoils.css";
import { Link } from "react-router-dom";

// Image
import eye from "../../assets/eye.png";
import spoil_enchère from "../../assets/spoils/spoil_enchère.png";
import spoil_espace_fts from "../../assets/spoils/spoil_espace_fts.png";
import spoil_enchère_deflou from "../../assets/spoils/spoil_enchère_deflou.png";
import spoil_espace_fts_deflou from "../../assets/spoils/spoil_espace_fts_deflou.png";
import modo from '../../assets/recrutements-img/modo.png';

const Spoils = () => {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const img = document.querySelector(".img");

  const handleClick = () => {
    if (click === true) {
      click2(false);
    }
    setClick(!click);
    img.classList.add("active");
  };

  const handleClick2 = () => {
    if (click2 === true) {
      click(false);
    }
    setClick2(!click2);
  };

  return (
    <section className="spoils">
      <div className="title">
        <img src={eye} alt="" />
        <h1>Spoils</h1>
      </div>

      <div className="content">
        <div onClick={handleClick} className="card">
          <h2>Vous révez d'un système d'enchère ?</h2>
          {click === true ? (
            <img src={spoil_enchère_deflou} alt="spoil enchère" />
          ) : (
            <img src={spoil_enchère} alt="spoil enchère" />
          )}
        </div>

        <div onClick={handleClick2} className="card">
          <h2>Avoir votre espace Fantashop ?</h2>
          {click2 === true ? (
            <img src={spoil_espace_fts_deflou} alt="spoil enchère" />
          ) : (
            <img src={spoil_espace_fts} alt="spoil enchère" />
          )}
        </div>
      </div>

      <div className="container_card">
        <div className="card">
            <div className="left">
                <img src={modo} alt="modo" width="60" />
                <h3>Recrutements | FantaShop V8</h3>
            </div>
            <Link to='/recrutements'>
                Se renseigner
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Spoils;

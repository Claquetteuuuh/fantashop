import React from "react";
import "./avis_card.scss";

const AvisCard = ({rate,title,image,paragraph,content}) => {

  return (
    <div className="card__avis-container">
      <div className="header__card">
        <div className="title">
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </div>
        <div className="rate__container">
          <img src={rate >= 1 ? "./images/rate/solid.svg" : "./images/rate/empty.svg"} alt="icon" />
          <img src={rate >= 2 ? "./images/rate/solid.svg" : "./images/rate/empty.svg"} alt="icon" />
          <img src={rate >= 3 ? "./images/rate/solid.svg" : "./images/rate/empty.svg"} alt="icon" />
          <img src={rate >= 4 ? "./images/rate/solid.svg" : "./images/rate/empty.svg"} alt="icon" />
          <img src={rate >= 5 ? "./images/rate/solid.svg" : "./images/rate/empty.svg"} alt="icon" />
        </div>
      </div>
      <p className="paragraph">
        {content}
      </p>

    </div>
  );
};

export default AvisCard;
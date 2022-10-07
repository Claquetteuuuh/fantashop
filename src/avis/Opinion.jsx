import React, { useState, useEffect} from "react";
import AvisCard from "../components/AvisCard/AvisCard";
import { MediumTitle } from "../components/Components";
import ModalAvis from "../components/ModalAvis/ModalAvis";
import "./opinion.scss";

const Opinion = ({ accessToken }) => {
  const [avisModal, setAvisModal] = useState(false);
  const [rates, setRates] = useState(undefined);
  const [rate, setRate] = useState(undefined);

  const handleAvisModal = () => {
    setAvisModal(!avisModal);
  };

  useEffect( () => {
    fetch("https://api.fantashop.fr/rate/list")
      .then((res) => res.json())
      .then((res) => {
        let rs = res.reverse()

        setRates(rs);

        let c = 0;

        for (let r of res) {
          c += r.rate.rate;
        }

        setRate(c/res.length);
      });
  },[]);
  window.addEventListener("keydown", function (event) {
    if (
      event == null ||
      event.key == null ||
      event == undefined ||
      event.key == undefined
    ) {
      return;
    }
    if (event.key.toLowerCase() == "escape") {
      setAvisModal(false);
    }
  },[]);
  if (avisModal && !accessToken) {
    window.location = "/mustconnect"
  }
  return (
    <>
      <main className="opinion__container">
        <MediumTitle>Donner votre avis</MediumTitle>
        <div className="box__container">
          <div className="header">
            <div className="title">
              <h1>Espace avis</h1>
              <img src="./images/title_fts.png" alt="fts" />
            </div>
            {rate && (
              <div className="stars">
                <div className="star">
                  <img
                    src={
                      rate >= 1
                        ? "./images/rate/solid.svg"
                        : "./images/rate/empty.svg"
                    }
                    alt="icon"
                  />
                  <img
                    src={
                      rate >= 2
                        ? "./images/rate/solid.svg"
                        : "./images/rate/empty.svg"
                    }
                    alt="icon"
                  />
                  <img
                    src={
                      rate >= 3
                        ? "./images/rate/solid.svg"
                        : "./images/rate/empty.svg"
                    }
                    alt="icon"
                  />
                  <img
                    src={
                      rate >= 4
                        ? "./images/rate/solid.svg"
                        : "./images/rate/empty.svg"
                    }
                    alt="icon"
                  />
                  <img
                    src={
                      rate >= 5
                        ? "./images/rate/solid.svg"
                        : "./images/rate/empty.svg"
                    }
                    alt="icon"
                  />
                </div>
                <p className="star__value">
                  {rate.toFixed(1)} ({rates.length} avis)
                </p>
              </div>
            )}
          </div>
          <div className="scroll">
            <div className="content">
              {rates && rates.map((rate, index) => {
                  return (
                    <AvisCard
                      key={index}
                      title={rate.rate.title}
                      paragraph={rate.user.username + " " + rate.dateString}
                      content={rate.rate.content}
                      image={
                        "https://cdn.discordapp.com/avatars/" +
                        rate.user.id +
                        "/" +
                        rate.user.avatar +
                        ".png"
                      }
                      rate={rate.rate.rate}
                    />
                  );
                })}
            </div>
          </div>
          <button onClick={handleAvisModal}>
            <img src="./images/icons/pen.svg" alt="icon" width={40} />
            <span>Mettre un avis</span>
          </button>
        </div>
      </main>

      {avisModal && accessToken && (
        <ModalAvis avisModal={handleAvisModal} accessToken={accessToken} />
      )}
      
    </>
  );
};

export default Opinion;

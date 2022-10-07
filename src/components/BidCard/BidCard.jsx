import React, { useEffect, useState } from "react";
import ParticipateModal from "../ParticipateModal/ParticipateModal";
import "./bid_card.scss";

const BidCard = ({ accessToken, details, diffdate }) => {
  const [participateModal, setParticipateModal] = useState(false);
  const [actualBidder, setactualBidder] = useState(false);

  useEffect(() => {
    fetch("https://api.fantashop.fr/users/getuser/" + details.actualBidder)
      .then((res) => res.json())
      .then((data) => {
        setactualBidder(data);
      });
  }, [details.actualBidder]);

  const handleClick = () => {
    setParticipateModal(!participateModal);
  };

  return (
    <>
      <div
        className="bid__card-container"
        style={{ background: `${details.color}` }}
      >
        <div className="bid__card-content">
          <div className="left">
            <img src={details.image} alt="" width={120} />
          </div>
          <div className="right">
            <h3>{details.item}</h3>
            <div className="descriptions">
              <div className="text">
                <img src="./images/icons/money.svg" alt="icon" />
                <p>
                  Prix de départ : <span>{details.price}</span>
                </p>
              </div>
              <div className="text">
                <img src="./images/icons/bid.svg" alt="icon" />
                <p>
                  Prix actuel : <span>{details.actualPrice}</span>
                </p>
              </div>
              <div className="text">
                <img src="./images/icons/time.svg" alt="icon" />
                <p>
                  Temps restant : <span>{JSON.stringify(diffdate)}</span> jours
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="btn">
          <button onClick={handleClick}>Participer</button>
        </div>
      </div>

      {participateModal && (
        <ParticipateModal
          actualBidder={actualBidder}
          details={details}
          accessToken={accessToken}
          participateModal={handleClick}
        />
      )}
    </>
  );
};

export default BidCard;

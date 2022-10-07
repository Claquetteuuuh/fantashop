import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import "./participate_modal.scss";

const ParticipateModal = ({ actualBidder,details,accessToken,participateModal }) => {
  const [bid, setBid] = useState(0);
  const handleclick = () => {
    if (bid > details.actualPrice) {
      fetch("https://api.fantashop.fr/auction/set/bidding/" + details.id, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          
            price : bid,
            user : accessToken
        
        }),
      })
      setTimeout(() => {
        window.location.reload(false)
      }, 500);
      }}


  return (
    <div className="particpate__modal-container">
      <div className="particpate__modal-content">
        <div className="header__participate">
          <h1>
            Enchère <span>{details.item}</span>
          </h1>
          <button onClick={participateModal} className="cancel">
            Fermer
          </button>
        </div>
        <div className="last__bid">
          <div className="last">
            <h2>Dernière enchère de</h2>
            <div className="right">
                <img src={"https://cdn.discordapp.com/avatars/" + actualBidder.id + "/" + actualBidder.avatar + ".png"} alt="avatar" />
                <h3>{actualBidder.username}</h3>
            </div>
          </div>
          <div className="price">
            <img src="./images/icons/money-green.svg" alt="icon" width={30} />
            <p>{details.actualPrice}</p>
          </div>
        </div>
        <div className="bottom">
          <img src="./images/icons/bid-modal.svg" alt="icon" width={60} />
          <div className="middle">
            <h2>Fin de l'enchère dans :</h2>
            <h1>{Math.round((new Date(details.expiredDate) - new Date())/ 1000/60/60)} heures</h1>
          </div>
          <input type="text" name="name" placeholder="Enchérir (sans le signe $)" onChange={ (val) => { setBid(val.target.value) }}/>
          <button className="btn" onClick={handleclick}>Enchérir</button>
        </div>
      </div>
    </div>
  );
};

export default ParticipateModal;

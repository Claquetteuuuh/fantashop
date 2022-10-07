import React, { useState } from "react";
import "./bid_modal.scss";

const BidModal = ({ accessToken,bidModal }) => {
  const [item, setitem] = useState("");
  const [price, setprice] = useState(0);
  const [Quantité, setqté] = useState(0);
  const [days, setdays] = useState(0);
  const [link, setlink] = useState("");
  const handleclick = () => {
    if (item === "" || price === 0 || days === 0 || days === "" || link === "" || Quantité === 0) {
      alert("Veuillez remplir tous les champs");
    } else {
      if (accessToken == undefined){
        alert("Veuillez vous connecter")
      }
      else{

      fetch("https://api.fantashop.fr/auction/set/wait/" + accessToken, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          item : item,
          image : link,
          number : Quantité,
          price : price,
          days : days
      }
        )

      }).then(res => res.json())
        .then(res => {console.log(res)})
      bidModal();
      alert("Votre enchère a été envoyée au staff pour validation ! Merci de votre confiance !");
    }}
  };
  return (
    <div className="bid__modal-container">
      <div className="bid__modal">
        <h1>Créer une enchère</h1>
        <div className="bid__modal-content">
          <div className="left">
            <img src="./images/icons/bid-modal.svg" alt="icon" />
          </div>
          <div className="right">
            <input type="text" name="name" placeholder="Nom de l'item" onChange={(val) => { setitem(val.target.value) }} />
            <input type="text" name="quantité" placeholder="Quantité" onChange={(val) => { setqté(val.target.value) }} />
            <input type="text" name="price" placeholder="Prix de départ" onChange={(val) => { setprice(val.target.value) }} />
            <select name="pets" id="pet-select" onChange={(val) => { setdays(val.target.value) }}>
              <option value="">Temps souhaité</option>
              <option value="1">1 jour</option>
              <option value="2">2 jours</option>
              <option value="3">3 jours</option>
            </select>
            <input
              type="text"
              name="link"
              placeholder="Lien de l'image (lien discord)"
              onChange={(val) => { setlink(val.target.value) }}
            />
          </div>
        </div>
        <div className="btn">
          <button className="cancel" onClick={bidModal}>Fermer</button>
          <button className="post_bid" onClick={handleclick}>Créer l'enchère</button>
        </div>
      </div>
    </div>
  );
};

export default BidModal;

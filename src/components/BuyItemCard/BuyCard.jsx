import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import "./buy_card.scss";
import { v4 as uuidv4 } from 'uuid'

const BuyCard = ({ buy, user, id ,maxqte,price}) => {

  const [itemQuantity, setItemQuantity] = useState(1)
  const [comment, setcomment] = useState("aucun commentaire")

  const handleBuy = (e) => {
    if (itemQuantity > maxqte) {
      alert("vous ne pouvez pas acheter plus de " + maxqte + " items")
    }
    else {
      e.preventDefault();
    const uuid = uuidv4()
    fetch("https://api.fantashop.fr/shop/buy/items/" + id, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          discord: user.discriminator,
          id:user.id
        },
        command: {
          quantity: itemQuantity,
          commentaire: comment,
          uuid: uuid
        }
      }
      )

    })
    setTimeout(() => {
      window.location = "/purchased"
    }, 1000);
    }
  };


  return (
    <div className="buy__card-container">
      <div className="buy__card-content">
        <form>
          <div className="input__container">
            <FaUser className="icon" />
            <input
              type="text"
              name="pseudo"
              placeholder="Pseudo en jeu"
              required
            />
          </div>
          <div className="input__container" style={{ marginTop: "20px" }}>
            <FaUser className="icon" />
            <input
              type="text"
              name="discord"
              defaultValue={user.username + "#" + user.discriminator}
              required
              disabled
              style={{ cursor: "not-allowed", color: "white" }}
            />
          </div>
          <div
            className="input__container"
            style={{ marginTop: "20px", width: "40%" }}
          >
            <input
              type="number"
              placeholder="Quantité"
              name="quantity"
              min="1"
              max="1000000"
              defaultValue="1"
              required
              onChange={(val) => {setItemQuantity(val.target.value)}}
            />
          </div>
          <p>Comentaires (facultatif)</p>
          <div className="input__container">
            <textarea name="comment" onChange={(val) => {setcomment(val.target.value)}}></textarea>
          </div>
          <p style={{color: "#ff7070"}}><span style={{color:"white"}}>Prix total (sans réduction) : </span>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price * itemQuantity)}</p>
          <div className="bottom">
            <button className="cancel" onClick={buy}>
              Annuler
            </button>
            <button className="buy" onClick={handleBuy}>
              Acheter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyCard;

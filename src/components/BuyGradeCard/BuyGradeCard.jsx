import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import "./buy_grade_card.scss";
import { v4 as uuidv4 } from 'uuid'

const BuyGradeCard = ({ buyGrade , user , id}) => {
  const [comment, setcomment] = useState("aucun commentaire")
  const handleBuyGrade = (e) => {
    e.preventDefault();
    const uuid = uuidv4()
    fetch("https://api.fantashop.fr/shop/buy/ranks/" + id, {
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
          commentaire: comment,
          uuid: uuid,
          code:undefined
        }
      }
      )
    }
    )
    setTimeout(() => {
      window.location = "/purchased"
    }
      , 1000)
    
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
              defaultValue={user.username+ "#" +  user.discriminator}
              required
              disabled
              style={{ cursor: "not-allowed" }}
            />
          </div>
          <p>Comentaires (facultatif)</p>
          <div className="input__container">
            <textarea name="comment" onChange={(val) => {setcomment(val.target.value)}}></textarea>
          </div>
          <div className="bottom">
            <button className="cancel" onClick={buyGrade}>Annuler</button>
            <button className="buy" onClick={handleBuyGrade}>Acheter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyGradeCard;

import React, { useState } from "react";
import BuyCard from "../BuyItemCard/BuyCard";
import InfoCard from "../InfoItemCard/InfoCard";
import "./item_card.scss";

const ItemCard = ({title,prix,enchants,img,id,user,maxqte}) => {
  const [infoModal, setInfoModal] = useState(false);
  const [buyModal, setBuyModal] = useState(false);

  const handleShow = () => {
    setInfoModal(!infoModal);
  };
  
  const handleBuyModal = () => {
    setBuyModal(!buyModal)
  }

  return (
    <>
      <div className="card__items-container">
        <div className="title">
          <h3>{title}</h3>
          {enchants && <h4>{enchants}</h4>}
        </div>
        <div className="img__items">
          <img src={img} alt="items" />
        </div>
        <div className="description">
          <h4>À partir de {prix}$</h4>
          <div className="btns">
            <button className="info__icon" onClick={handleShow}>
              <img src="./images/icons/info.png" alt="info" />
            </button>
            <button className="buy" id = {id} onClick={handleBuyModal}>Acheter</button>
          </div>
        </div>
      </div>

      {infoModal && <InfoCard show={handleShow} id={id}/>}
      {buyModal && <BuyCard buy={handleBuyModal} user={user} id={id} maxqte = {maxqte} price={prix}/>}
    </>
  );
};

export default ItemCard;

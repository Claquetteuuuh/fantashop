import React, { useEffect, useState } from "react";
import "./info_card.scss";

const InfoCard = ({ show, id }) => {
  const [item, setitem] = useState({});
  function nice([...array]) {
    return array.concat(array.splice(-2, 2).join(' and ')).join(', ');
  } 
  
  useEffect(() => {
    fetch("https://api.fantashop.fr/shop/item/" + id)
      .then((res) => res.json())
      .then((data) => {
        setitem(data)
      });
  }, [id])

  return (
    <div className="info__card-container">
      <div className="info__card-content">
        <div className="header__card">
          <div className="left">
            <img src="./images/icons/big-info.png" alt="info" />
          </div>
          <div className="info__text">
            <h3>Informations de l'item</h3>
          </div>
        </div>
        <div className="card__content">
          <div className="title">
            <img src={item.picture} alt="test" width={90} />
            <h2>{item.title}</h2>
          </div>
          <div className="descriptions">
            <div className="details">
              <div className="detail">
                <img src="./images/icons/cart-quantity.png" alt="caddy" />
                <h4>  
                  Quantité maximale : <span>{item.maxQuantity}</span>
                </h4>
              </div>
              <div className="detail">
                <img src="./images/icons/clock.png" alt="horloge" />
                <h4>
                  Délai de livraison : <span>{item.maxDay} jour</span>
                </h4>
              </div>
              <div className="detail">
                <img src="./images/icons/box.png" alt="box" />
                <h4>
                  Catégorie : <span>{item.category}</span>
                </h4>
              </div>
              <div className="detail">
                <img src="./images/icons/rarity.png" alt="rarity" />
                <h4>
                  Rareté : <span>Commune</span>
                </h4>
              </div>
              <div className="disponibility__block">
                <h1>Item disponible</h1>
              </div>
            </div>
            <div className="disponibility">
              <img src="./images/disponibility.png" alt="disponibility" />
            </div>
          </div>
        </div>
        <div className="close">
          <button onClick={show}>Fermer</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

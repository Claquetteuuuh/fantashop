import React from "react";
import "./success_purchase.scss";

const SuccessPurchase = () => {
  return (
    <main className="success__purchase">
      <img className="success" src="./images/icons/success.svg" alt="icon" />
      <h1>Votre commande a bien été enregistré !</h1>
      <p>Merci de votre commande !</p>
      <a href="/">
        <img className="icon" src="./images/icons/home-white.svg" alt="icon" />
        <span>Retourner à l'accueil</span>
      </a>
    </main>
  );
};

export default SuccessPurchase;

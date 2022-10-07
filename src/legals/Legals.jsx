import React from "react";
import { MediumTitle } from "../components/Components";
import "./legals.scss";

const Legals = () => {
  return (
    <main className="legals__container">
      <MediumTitle>Mentions legales</MediumTitle>
      <div className="text">
        <h1>I - Mentions legales</h1>
        <div className="paragraph">
          <p>
            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour
            la confiance dans l'économie numérique, il est précisé aux
            utilisateurs du site https://fantashop.fr l'identité des différents
            intervenants dans le cadre de sa réalisation et de son suivi :
          </p>
          <br />
          <p>Propriétaire : tthomasrh - Contact : tthomasrh@fantashop.fr</p>
          <br />
          <p>Hébergeur : OuiHeberg SARL, 9 RUE DES COLONNES 75002 PARIS</p>
          <br />
          <p>
            Pour tout contact et/ou demande d'informations: contact@fantashop.fr
          </p>
        </div>
      </div>
    </main>
  );
};

export default Legals;

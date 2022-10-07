import React from "react";
import { Icon } from "@iconify/react";
import './connection.scss';

const MustConnect = () => {
  return (
    <main className="success__login">
      <img className="success" src="./images/icons/warning.svg" alt="icon" />
      <h1>Attention !</h1>
      <p>Pour continuer, il faut se connecter !</p>
      <a className="button" href="https://api.fantashop.fr/login">
          <Icon icon="bx:log-in" className="icon" />
          Se Connecter
        </a>
    </main>
  );
};

export default MustConnect;

import React from "react";
import { MediumTitle } from "../components/Components";
import "./shop.scss";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <main className="shop__container">
      <MediumTitle>Boutique</MediumTitle>
      <div className="card__container">
        <Link to="/items" className="card__container-items">
          <img src="./images/chestItems.png" alt="coffre" />
          <h2>Items</h2>
        </Link>
        <Link to="/grades" className="card__container-grades">
          <img src="./images/plastronGrade.png" alt="grade" />
          <h2>Grades</h2>
        </Link>
        <Link to="/duplication-de-minerais" className="card__container-dupli">
          <img className="hammer" src="./images/hammerDupli.png" alt="marteau" />
          <div className="text">
            <h1>Duplication</h1>
            <p>Duplique tes minerais gratuitement !</p>
          </div>
          <img className="block" src="./images/blockDupli.png" alt="bloc" />
        </Link>
      </div>
      
    </main>
  );
};

export default Shop;

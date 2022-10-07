import React from "react";
import { MediumTitle } from "../components/Components";
import "./shop.scss";

const Shop = () => {
  return (
    <main className="shop__container">
      <MediumTitle>Boutique</MediumTitle>
      <div className="card__container">
        <a href="/items" className="card__container-items">
          <img src="./images/chestItems.png" alt="coffre" />
          <h2>Items</h2>
        </a>
        <a href="/grades" className="card__container-grades">
          <img src="./images/plastronGrade.png" alt="grade" />
          <h2>Grades</h2>
        </a>
      </div>
    </main>
  );
};

export default Shop;

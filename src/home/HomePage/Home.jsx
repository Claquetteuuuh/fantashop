import React from "react";
import { BigTitle } from "../../components/Components";
import "./home.scss";

// Images
import chest_banner from "../../assets/chest_banner.png";

const Home = () => {
  return (
    <section className="home__section">
      <div className="title">
        <BigTitle>FantaShop</BigTitle>
        <p>Le shop le plus innovant de Paladium</p>
      </div>
      <img src={chest_banner} alt="bannière" />
    </section>
  );
};

export default Home;
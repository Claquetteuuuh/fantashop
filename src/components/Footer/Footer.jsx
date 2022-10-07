import React from "react";
import { Icon } from "@iconify/react";
import './footer.scss';

const Footer = () => {
  return (
    <footer>
        <img src="./images/title_fts.png" alt="" />
      <div className="footer__content">
        <div className="left">
          <div className="title">
            <h4>Pages</h4>
          </div>
          <div className="links">
            <a href="/">Home</a>
            <a href="/boutique">Commander</a>
            <a href="/profile">Profile</a>
            <a href="/encheres">Enchère</a>
            <a href="#" style={{ cursor: "not-allowed", color: "grey" }}>News</a>
            <a href="/notre-histoire">Notre histoire</a>
            <a href="/">Recrutements</a>
            <a href="mentions-legales">Mentions legales</a>
          </div>
        </div>
        <div className="middle">
          <div className="title">
            <h4>Crédit</h4>
          </div>
          <p>tthomasrh</p>
          <p>Saï</p>
          <p>berchbrown</p>
          <p>Paillettes_</p>
        </div>
        <div className="right">
          <a href = "https://discord.gg/6RW7dMTU2d">
            <Icon icon="akar-icons:discord-fill" color="white" width={30} />
            <span>Discord</span>
          </a>
          <a href="https://www.instagram.com/fantashop.v8/">
            <Icon icon="akar-icons:instagram-fill" color="white" width={30} />
            <span>Instagram</span>
          </a>  
          <a href="https://twitter.com/FantashopP">
            <Icon icon="akar-icons:twitter-fill" color="white" width={30} />
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

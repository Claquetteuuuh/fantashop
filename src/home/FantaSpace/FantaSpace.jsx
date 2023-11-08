import React, { useState,useEffect} from "react";
import { SmallTitle } from "../../components/Components";
import "./fanta_space.scss";

// Images
import fts_support from "../../assets/fts_support.png";
import fts_logo from "../../assets/fts_logo.png";
import test from "../../assets/test.png";
import test2 from "../../assets/test2.png";

const FantaSpace = ({ lastmaj }) => {
  const [items, setItems] = useState({"premier":{"title":"","number":40,"quantity":2309,"image":""},"deuxieme":{"title":"","number":30,"quantity":5382,"image":""},"troisième":{"title":"","number":29,"quantity":31,"image":""}});
  useEffect( () => {
    fetch("https://api.fantashop.fr/shop/BestItems").then((res) => res.json()).then(data => {
        setItems(data)
      })
  },[])

  return (
    <section id="fantaspace" className="fanta__space">
      <SmallTitle>FantaShop'Space</SmallTitle>

      <div className="container">

        <div className="left">
          <div className="box__maj">
            <h2>Dernière mise à jour</h2>
            {
              lastmaj.map((maj, index) => {
                return (
                  <div className="content" key={index}>
                    <div className="box__patch">
                      <div className="box__patch-content">
                        <img src={test2} alt="" />
                        <h3>{maj.title}</h3>
                      </div>
                      <a href="https://discord.com/channels/699199122116313108/980102679894294538">Patchnote</a>
                    </div>
                  </div>
                )
              })
            }

          </div>
          <div className="btn">
            <a href="https://discord.com/channels/699199122116313108/980102679894294538">Voir les anciens patchnotes</a>
          </div>
        </div>

        <div className="right">
          <div className="box__items">
            <h2>Nos meilleurs items</h2>
            <div className="box__items-content">
              <div className="box">
                <div className="text">
                  <div className="title" style={{backgroundColor:'#F2CF74'}}>
                    <h1>1ER</h1>
                  </div>
                  <div className="descriptions">
                    <img src={items.premier.image}alt="" />
                    <h1>{items.premier.title}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="box__items-content">
              <div className="box">
                <div className="text">
                  <div className="title" style={{backgroundColor:'#F29A74'}}>
                    <h1>2E</h1>
                  </div>
                  <div className="descriptions">
                    <img src={items.deuxieme.image}alt="" />
                    <h1>{items.deuxieme.title}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="box__items-content">
              <div className="box">
                <div className="text">
                  <div className="title" style={{backgroundColor:'#7481F2'}}>
                    <h1>3E</h1>
                  </div>
                  <div className="descriptions">
                    <img src={items.troisième.image}alt="" />
                    <h1>{items.troisième.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="discord__princi">
            <div className="discord">
              <img src={fts_logo} alt="logo principal" style={{ width: '60px', borderRadius: '10px' }} />
              <h3>Discord principal</h3>
            </div>
            <a href="https://discord.gg/6RW7dMTU2d" target="_blank" rel="noreferrer">Rejoindre</a>
          </div>
          <div className="discord__support">
            <div className="discord">
              <img src={fts_support} alt="logo support" style={{ width: '60px', borderRadius: '10px' }} />
              <h3>Discord support</h3>
            </div>
            <a href="https://discord.gg/Rn6um7eVkN" target="_blank" rel="noreferrer">Rejoindre</a>
          </div>
        </div>


      </div>

    </section>
  );
};

export default FantaSpace;

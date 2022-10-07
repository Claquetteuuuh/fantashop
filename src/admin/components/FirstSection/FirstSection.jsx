import React, { useState, useEffect } from "react";
import "./first_section.scss";

const FirstSection = () => {
  const [members, setmembers] = useState(0);
  const [orders, setorders] = useState(0);
  const [bids, setbids] = useState(0);
  const [accounts, setaccounts] = useState(0);
  // form
  const [name, setname] = useState("");
  const [price, setprice] = useState(0);
  const [category, setcategory] = useState([]);
  const [enchantements, setenchantements] = useState("");
  const [aliases, setaliases] = useState("");
  const [link, setlink] = useState("");
  const [quantity, setquantity] = useState(0);
  const [delay, setdelay] = useState(0);

  const handleclick = () => {
    if (name !== "" && price !== 0 && category !== "" && link !== "" && quantity !== 0 && delay !== 0) {
      fetch('https://api.fantashop.fr/shop/add_item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          price: price,
          category: category,
          enchants: enchantements,
          aliases: aliases,
          link: link,
          quantity: quantity,
          delay: delay
        })

      })
      alert('Item added')
    }
    else{
      alert('Please fill all the fields')
    }
  }
  useEffect(() => {
    fetch('https://api.fantashop.fr/site/count').then(res => res.json()).then(res => setaccounts(res))
    fetch('https://api.fantashop.fr/discord/count').then(res => res.json()).then(res => setmembers(res))
    fetch('https://api.fantashop.fr/orders/getorders').then(res => res.json()).then(res => setorders(res.length))
    fetch('https://api.fantashop.fr/auction/get/auctions/all').then(res => res.json()).then(res => setbids(res.auctions.length))
  }, [])
  return (
    <section className="first__section">
      <div className="left">
        <div className="box__container">
          <div className="box">
            <h1>{members + ""}</h1>
            <p>Membres sur discord</p>
          </div>
          <div className="box">
            <h1 className="purple">{orders + ""}</h1>
            <p>Commandes</p>
          </div>
          <div className="box">
            <h1>{accounts + ""}</h1>
            <p>Comptes inscrit sur le FantaShop</p>
          </div>
          <div className="box">
            <h1 className="purple">{bids + ""}</h1>
            <p>Enchères</p>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="form">
          <div className="inputs">
            <h2>Ajouter un items</h2>
            <input
              type="text"
              name="name"
              placeholder="Nom de l'item"
              onChange={(e) => setname(e.target.value)}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Prix"
              onChange={(e) => setprice(e.target.value)}
              required
            />
            <select onChange={(e) => setcategory([e.target.value])}>
              <option value="Farming">Farming</option>
              <option value="Minerais">Minerais</option>
              <option value="Outils">Outils</option>
              <option value="PvP">PvP</option>
              <option value="Machines">Machines</option>
              <option value="Divers">Divers</option>
            </select>
            <input
              type="text"
              name="enchants"
              placeholder="enchantements"
              onChange={(e) => setenchantements(e.target.value)}

            />
            <input
              type="text"
              name="aliases"
              placeholder="aliases"
              onChange={(e) => setaliases(e.target.value)}

            />
            <input
              type="url"
              name="link"
              placeholder="Lien de l'image"
              onChange={(e) => setlink(e.target.value)}
              required
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantité maximale"
              onChange={(e) => setquantity(e.target.value)}
              required
            />
            <input
              type="number"
              name="delay"
              placeholder="Délai de livraison"
              onChange={(e) => setdelay(e.target.value)}
              required
              style={{ marginBottom: "25px" }}
            />
          </div>
          <div className="btn">
            <button onClick={handleclick}>Ajouter l'item</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;

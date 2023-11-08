import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import "./fanta_dupli.scss";

const FantaDupli = ({ accessToken }) => {
  if (!accessToken) {
    window.location = "/mustconnect";
  }
  const [name, setname] = useState("")
  const [server, setserver] = useState("")
  const [user, setUser] = useState("")
  useEffect(() => {
    fetch("https://api.fantashop.fr/users/getuser/" + accessToken).then((res) => res.json()).then(data => {
      setUser(data)
    })
  }, [])
  const handleclick = () => {
    if (!name == "" && !server == "") {
      fetch('https://api.fantashop.fr/shop/dupli/buy',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              user: {
                username: user.username,
                discord: user.discriminator,
                id: user.id
              },
              username: name,
              server: server
            }
          )
        }
      )
      setTimeout(() => {
        window.location = "/purchased"
      }, 500);
    }
    else {
      alert('veuillez renseigner tous les champs !')
    }


  }
  return (
    <main className="dupli__container">
      <img className="title" src="/images/title_dupli.png" alt="titre" />
      <div className="dupli__content">
        <div className="form_div">
          <input type="text" name="name" placeholder="Nom du Joueur" onChange={(e) => setname(e.target.value)} />
          <select name="server" id="" onChange={(e) => setserver(e.target.value)}>
            <option value="">Serveur Souhaité</option>
            <option value="Muzdan">Muzdan</option>
            <option value="Keltis">Keltis</option>
            <option value="Imbali">Imbali</option>
            <option value="Luccento">Luccento</option>
            <option value="Manashino">Manashino</option>
            <option value="Neolith">Neolith</option>
            <option value="Soleratl">Soleratl</option>
            <option value="Naera">Naera</option>
            <option value="Untaa">Untaa</option>
          </select>
          <button onClick={handleclick}><span>ENVOYER LA DEMANDE</span></button>
        </div>
        <div className="explication">
          <h1>Comment ça marche ?</h1>
          <p>
            Comme son nom l’indique la duplication de minerais, c’est pour qu’on duplique vos minerais, c'est-à-dire qu’une personne vérifiée du FantaShop va dupliquer vos minerais selon vos attentes, toute la discussion se fait pour discord et l’attente est de maximales 6 heures à par la nuit.
          </p>
        </div>
      </div>
      <div className="box">
        <img className="unclaim" src="/images/unclaim.png" alt="icon" />
        <div className="commands">
          <h2>
            Commande Dès maintenant <br /> sur le fantashop
          </h2>
          <a href="/items">
            <Icon icon="fa-solid:cart-arrow-down" style={{ marginRight: "10px", fontSize: "1.1rem" }} />
            commandez dès maintenant
          </a>
        </div>
        <img className="sword" src="/images/sword.png" alt="icon" />
      </div>
    </main>
  );
};

export default FantaDupli;

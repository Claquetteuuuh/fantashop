import React, { useState ,useEffect} from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { Icon } from "@iconify/react";
import "./navbar.scss";
import { Link } from "react-router-dom";

// Images
import logo from "../../assets/logo.png";

const Navbar = ({ accessToken }) => {
  const [showNav, setShowNav] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    fetch("https://api.fantashop.fr/users/getuser/" + accessToken)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  },[]);

  if (showNav === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  function IsLogged() {
    if (user) {
      return (
        <div className="avatar">
          
          <Link to="/profile">
            <img
              src={
                "https://cdn.discordapp.com/avatars/" + user.id + "/" + user.avatar + ".png"
              }
              alt="avatar"
            />
          </Link>
        </div>
      );
    } else {
      return (
        <a className="button" href="https://api.fantashop.fr/login">
          <Icon icon="bx:log-in" className="icon" />
          Se Connecter
        </a>
      );
    }
  }

  return (
    <section className="header__container">
      <header>
        <div className="left">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="right">
          <IsLogged></IsLogged>
          <div className="burger__menu" onClick={() => setShowNav(true)}>
            <RiMenu3Fill className="icons" />
          </div>
        </div>

        {showNav ? <div className="bg__menu" onClick={() => setShowNav(false)} ></div> : ""}

        <nav className={showNav ? "nav-menu active" : "nav-menu"}>
          <div className="top">
            <RiCloseFill className="icons" onClick={() => setShowNav(false)} />
            <img src="./images/title_fts.png" alt="fantashop" width={180} />
          </div>
          <ul>
            <li>
              <Link to="/" className="link" onClick={() => setShowNav(false)}>
                <img src="./images/icons/home.png" alt="icone de maison" />
                Accueil
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="/boutique"
                onClick={() => {
                  setShowNav(false);
                }}
              >
                <img src="./images/icons/cart.png" alt="icone de caddy" />
                Boutique
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="/encheres"
                onClick={() => setShowNav(false)}
              >
                <img src="./images/icons/bid.png" alt="icone d'enchère" />
                Enchères
              </Link>
            </li>
            <li>
              <Link
                to="/avis"
                className="link"
                onClick={() => setShowNav(false)}
              >
                <img src="./images/icons/star.png" alt="icone d'étoile" />
                Avis
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="/notre-histoire"
                onClick={() => setShowNav(false)}
              >
                <img src="./images/icons/book.png" alt="icone de livre" />
                Notre Histoire
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="/news"
                onClick={() => setShowNav(false)}
              >
                <img
                  src="./images/icons/newspaper.png"
                  alt="icone de journal"
                />
                News
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="/countdown"
                onClick={() => setShowNav(false)}
              >
                <img
                  height={45}
                  src="./images/icons/chronometer.png"
                  alt="icone de journal"
                />
                Décompte
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
import React from "react";
import Header from "../Header/Header";
import "./recruitements.css";

// Image
import cart from "../../assets/recrutements-img/cart.png";
import redac from "../../assets/recrutements-img/redac.png";
import dev from "../../assets/recrutements-img/dev.png";
import modo from "../../assets/recrutements-img/modo.png";
import anim from "../../assets/recrutements-img/anim.png";
import support from "../../assets/recrutements-img/support.png";
import form from "../../assets/recrutements-img/form.png";

import ellipse from "../../assets/ellipse/ellipse.png";
import ellipse2 from "../../assets/ellipse/ellipse2.png";
import Footer from "../Footer/Footer";

const Recruitements = () => {
  return (
    <>
      <Header />
      <section className="recru">
      <img className="ellipse2" src={ellipse2} alt="" />
      <div className="content_recru">
        <h1>
          Recrutements <span>|</span> FantaShop V8
        </h1>
        <div className="container">
          <div className="card">
            <div className="left">
              <img src={cart} alt="caddy" width="60" />
              <h3>Vendeur(se)</h3>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScE7H71GUYzGvLM7dHdmOemwBD44xcVn4gfLbK-7kzn6c9M6g/viewform?usp=pp_url" target='_blank' rel="noreferrer">
              <img src={form} alt="logo formulaire" width="20" />
              Google Form
            </a>
          </div>
          <div className="card">
            <div className="left">
              <img src={modo} alt="modo" width="60" />
              <h3>Modérateur(trice)</h3>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSaYp4nPYwM3Whj344nhvOl_XDayE3xY73stahuEUvKWzTLA/viewform?usp=pp_url" target='_blank' rel="noreferrer">
              <img src={form} alt="logo formulaire" width="20" />
              Google Form
            </a>
          </div>
          <div className="card">
            <div className="left">
              <img src={redac} alt="rédacteur" width="60" />
              <h3>Rédacteur(trice)</h3>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1VsDcd5XXrpmvCf_ri6X1-W1P3iAZAyS3pBF-22XQYVf5_w/viewform?usp=sf_link" target='_blank' rel="noreferrer">
              <img src={form} alt="logo formulaire" width="20" />
              Google Form
            </a>
          </div>
          <div className="card">
            <div className="left">
              <img src={anim} alt="animateur" width="50" />
              <h3>Animateur(trice)</h3>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfdY5aRxS1RjJAzA55bkVPzIGKr1flFyFB1XqAgy-b47GHhsQ/viewform?usp=pp_url" target='_blank' rel="noreferrer">
              <img src={form} alt="logo formulaire" width="20" />
              Google Form
            </a>
          </div>
          <div className="card">
            <div className="left">
              <img src={dev} alt="developpeur" width="60" />
              <h3>Developpeur(se)</h3>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScf1-l6y8_YPs7lDgrBrWK9d4p-moL1DxMYWMB0q346yS553Q/viewform?usp=pp_url" target='_blank' rel="noreferrer">
              <img src={form} alt="logo formulaire" width="20" />
              Google Form
            </a>
          </div>
          <div className="card">
            <div className="left">
              <img src={support} alt="support helper" width="60" />
              <h3>Support Helper</h3>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScQe-wfBj5l1PBAm-I6mqih8TGt6_vmBL2tK8Tdil5ssWCh-w/viewform?usp=sf_link" target='_blank' rel="noreferrer">
              <img src={form} alt="logo formulaire" width="20" />
              Google Form
            </a>
          </div>
          <img className="ellipse" src={ellipse} alt="" />
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Recruitements;

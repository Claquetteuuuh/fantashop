import React from "react";
import "./card.scss";

const data = [
  {
    id: 1,
    title: "Vendeur(se)",
    img: "./images/recruitements/cart.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScE7H71GUYzGvLM7dHdmOemwBD44xcVn4gfLbK-7kzn6c9M6g/viewform?usp=pp_url",
  },
  {
    id: 2,
    title: "Modérateur(trice)",
    img: "./images/recruitements/modo.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdSaYp4nPYwM3Whj344nhvOl_XDayE3xY73stahuEUvKWzTLA/viewform?usp=pp_url",
  },
  {
    id: 3,
    title: "Rédacteur(trice)",
    img: "./images/recruitements/redac.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe1VsDcd5XXrpmvCf_ri6X1-W1P3iAZAyS3pBF-22XQYVf5_w/viewform?usp=sf_link",
  },
  {
    id: 4,
    title: "Animateur(trice)",
    img: "./images/recruitements/anim.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfdY5aRxS1RjJAzA55bkVPzIGKr1flFyFB1XqAgy-b47GHhsQ/viewform?usp=pp_url",
  },
  {
    id: 5,
    title: "Developpeur(se)",
    img: "./images/recruitements/dev.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScf1-l6y8_YPs7lDgrBrWK9d4p-moL1DxMYWMB0q346yS553Q/viewform?usp=pp_url",
  },
  {
    id: 6,
    title: "Support Helper",
    img: "./images/recruitements/support.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScQe-wfBj5l1PBAm-I6mqih8TGt6_vmBL2tK8Tdil5ssWCh-w/viewform?usp=sf_link",
  },
];

const Card = () => {
  return (
    <>
      {data.map((items) => (
        <div className="card" key={items.id}>
          <div className="left">
            <img src={items.img} alt={items.img} width="60" />
            <h3>{items.title}</h3>
          </div>
          <a href={items.link} target="_blank" rel="noreferrer">
            <img
              src="./images/recruitements/form.png"
              alt="logo formulaire"
              width="20"
            />
            Google Form
          </a>
        </div>
      ))}
    </>
  );
};

export default Card;

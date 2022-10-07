import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./modal_avis.scss";

const ModalAvis = ({ avisModal, accessToken }) => {
  const [rate, setRate] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [star, setStar] = useState(undefined);

  const hadleclick = () => {
    fetch("https://api.fantashop.fr/rate/post/" + accessToken, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.target.value,
        content: description.target.value,
        rate: rate / 20,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        fetch("https://api.fantashop.fr/rate/list")
          .then((res) => res.json())
          .then((data) => {
            let rs = data.reverse();

            setRate(rs);

            let c = 0;

            for (let r of data) {
              c += r.rate.rate;
            }

            setStar(c / data.length);
            
          });
      });
    avisModal();
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };

  const handleRating = (rate) => {
    setRate(rate);
  };

  return (
    <div className="modal__avis-container">
      <div className="modal__avis-content">
        <div className="header__modal">
          <h1>Donne ton avis</h1>
          <Rating
            fillColor="#ff7070"
            transition
            onClick={handleRating}
            onChange={(val) => {
              setRate(val.target.value);
            }}
            ratingValue={rate}
          />
        </div>
        <div className="commentary">
          <textarea
            name="comment"
            id=""
            rows="1"
            placeholder="Ecris le titre de ton commentaire..."
            onChange={setTitle}
          ></textarea>

          <textarea
            name="comment"
            id=""
            rows="8"
            placeholder="Ecris ton commentaire..."
            onChange={setDescription}
          ></textarea>
        </div>
        <div className="btn">
          <button className="cancel" onClick={avisModal}>
            Fermer
          </button>
          <button className="avis__post" onClick={hadleclick}>
            <img src="./images/icons/pen.svg" alt="icon" width={30} />
            <span>Mettre un avis</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAvis;

import React, { useState } from "react";
import BuyGradeCard from "../BuyGradeCard/BuyGradeCard";
import InfoGradeCard from "../InfoGradeCard/InfoGradeCard";
import "./grades_card.scss";

const data = [
  {
    id: 1,
    img: "./images/grades/premium.jpg",
    price: "5000$",
    descriptions: [
      {
        title: "Market Premium",
        bid: [
          {
            title: "Faire des enchères",
            icon: "./images/icons/cross.svg",
          },
        ],
        free: [
          {
            title: "Accès à la vente-libre",
            icon: "./images/icons/cross.svg",
          },
        ],
        lucky: [
          {
            title: "Vendre des lucky-blocks",
            icon: "./images/icons/cross.svg",
          },
        ],
        giveaway: [
          {
            title: "Giveaway exclusif",
            icon: "./images/icons/cross.svg",
          },
        ],
        color: [
          {
            title: "Choix de couleur de grade",
            icon: "./images/icons/cross.svg",
          },
        ],
        personal: [
          {
            title: "Accès salon de vente personnel",
            icon: "./images/icons/cross.svg",
          },
        ],
        condition: [
          {
            title: "Pas de condition sur les giveaway",
            icon: "./images/icons/cross.svg",
          },
        ],
        badge: "./images/badges/market-premium.svg",
        times: "3 mois",
      },
    ],
  },
  {
    id: 2,
    img: "./images/grades/vip.jpg",
    price: "10 000$",
    descriptions: [
      {
        title: "Market VIP",
        bid: [
          {
            title: "Faire des enchères",
            icon: "./images/icons/check.svg",
          },
        ],
        free: [
          {
            title: "Accès à la vente-libre",
            icon: "./images/icons/check.svg",
          },
        ],
        lucky: [
          {
            title: "Vendre des lucky-blocks",
            icon: "./images/icons/cross.svg",
          },
        ],
        giveaway: [
          {
            title: "Giveaway exclusif",
            icon: "./images/icons/cross.svg",
          },
        ],
        color: [
          {
            title: "Choix de couleur de grade",
            icon: "./images/icons/cross.svg",
          },
        ],
        personal: [
          {
            title: "Accès salon de vente personnel",
            icon: "./images/icons/cross.svg",
          },
        ],
        condition: [
          {
            title: "Pas de condition sur les giveaway",
            icon: "./images/icons/cross.svg",
          },
        ],
        badge: "./images/badges/market-vip.svg",
        times: "2 mois",
      },
    ],
  },
  {
    id: 3,
    img: "./images/grades/mvp.jpg",
    price: "25 000$",
    descriptions: [
      {
        title: "Market MVP",
        bid: [
          {
            title: "Faire des enchères",
            icon: "./images/icons/check.svg",
          },
        ],
        free: [
          {
            title: "Accès à la vente-libre",
            icon: "./images/icons/check.svg",
          },
        ],
        lucky: [
          {
            title: "Vendre des lucky-blocks",
            icon: "./images/icons/check.svg",
          },
        ],
        giveaway: [
          {
            title: "Giveaway exclusif",
            icon: "./images/icons/check.svg",
          },
        ],
        color: [
          {
            title: "Choix de couleur de grade",
            icon: "./images/icons/cross.svg",
          },
        ],
        personal: [
          {
            title: "Accès salon de vente personnel",
            icon: "./images/icons/cross.svg",
          },
        ],
        condition: [
          {
            title: "Pas de condition sur les giveaway",
            icon: "./images/icons/cross.svg",
          },
        ],
        badge: "./images/badges/market-mvp.svg",
        times: "1 mois",
      },
    ],
  },
  {
    id: 4,
    img: "./images/grades/mvp-plus.jpg",
    price: "50 000$",
    descriptions: [
      {
        title: "Market MVP+",
        bid: [
          {
            title: "Faire des enchères",
            icon: "./images/icons/check.svg",
          },
        ],
        free: [
          {
            title: "Accès à la vente-libre",
            icon: "./images/icons/check.svg",
          },
        ],
        lucky: [
          {
            title: "Vendre des lucky-blocks",
            icon: "./images/icons/check.svg",
          },
        ],
        giveaway: [
          {
            title: "Giveaway exclusif",
            icon: "./images/icons/check.svg",
          },
        ],
        color: [
          {
            title: "Choix de couleur de grade",
            icon: "./images/icons/check.svg",
          },
        ],
        personal: [
          {
            title: "Accès salon de vente personnel",
            icon: "./images/icons/check.svg",
          },
        ],
        condition: [
          {
            title: "Pas de condition sur les giveaway",
            icon: "./images/icons/check.svg",
          },
        ],
        badge: "./images/badges/market-mvp-plus.svg",
        times: "1 mois",
      },
    ],
  },
];

const GradeCard = ({user}) => {
  const [buyGradeModal, setBuyGradeModal] = useState(false);
  const [infoGradeModal, setInfoGradeModal] = useState(false);
  const [tempData, setTempData] = useState([]);
  const [currentgade, setcurrentgade] = useState(0);

  const handleBuyGradeModal = (event) => {
    setBuyGradeModal(!buyGradeModal);
    setcurrentgade(event.target.id)
  };

  const getData = (
    id,
    title,
    price,
    badge,
    times,
    bidTitle,
    bidIcon,
    freeTitle,
    freeIcon,
    luckyTitle,
    luckyIcon,
    giveawayTitle,
    giveawayIcon,
    colorTitle,
    colorIcon,
    personalTitle,
    personalIcon,
    conditionTitle,
    conditionIcon
  ) => {
    let tempData = [
      id,
      title,
      price,
      badge,
      times,
      bidTitle,
      bidIcon,
      freeTitle,
      freeIcon,
      luckyTitle,
      luckyIcon,
      giveawayTitle,
      giveawayIcon,
      colorTitle,
      colorIcon,
      personalTitle,
      personalIcon,
      conditionTitle,
      conditionIcon
    ];
    setTempData((grade) => [1, ...tempData]);

    return setInfoGradeModal(true);
  };

  return (
    <>
      {data.map((grade, index) => (
        <div className="card__grade-container" key={index}>
          <img className="grades" src={grade.img} alt="banner" />
          <div className="bottom">
            <h4>À partir de {grade.price}</h4>
            <div className="buttons">
              <button
                className="info__icon"
                onClick={() =>
                  getData(
                    grade.price,
                    grade.descriptions[0].title,
                    grade.descriptions[0].badge,
                    grade.descriptions[0].times,
                    grade.descriptions[0].bid[0].title,
                    grade.descriptions[0].bid[0].icon,
                    grade.descriptions[0].free[0].title,
                    grade.descriptions[0].free[0].icon,
                    grade.descriptions[0].lucky[0].title,
                    grade.descriptions[0].lucky[0].icon,
                    grade.descriptions[0].giveaway[0].title,
                    grade.descriptions[0].giveaway[0].icon,
                    grade.descriptions[0].color[0].title,
                    grade.descriptions[0].color[0].icon,
                    grade.descriptions[0].personal[0].title,
                    grade.descriptions[0].personal[0].icon,
                    grade.descriptions[0].condition[0].title,
                    grade.descriptions[0].condition[0].icon
                    
                  )
                }
              >
                <img src="./images/icons/info.png" alt="info" />
              </button>
              <button className="buy" onClick={handleBuyGradeModal} id={grade.id}>
                Acheter
              </button>
            </div>
            
          </div>
          
        {buyGradeModal && <BuyGradeCard buyGrade={handleBuyGradeModal} user={user} id = {currentgade}/>}
        </div>
      ))}

      
      {infoGradeModal === true ? (
        <InfoGradeCard
          price={tempData[1]}
          title={tempData[2]}
          badge={tempData[3]}
          times={tempData[4]}
          bidTitle={tempData[5]}
          bidIcon={tempData[6]}
          freeTitle={tempData[7]}
          freeIcon={tempData[8]}
          luckyTitle={tempData[9]}
          luckyIcon={tempData[10]}
          giveawayTitle={tempData[11]}
          giveawayIcon={tempData[12]}
          colorTitle={tempData[13]}
          colorIcon={tempData[14]}
          personalTitle={tempData[15]}
          personalIcon={tempData[16]}
          conditionTitle={tempData[17]}
          conditionIcon={tempData[18]}
          hide={() => setInfoGradeModal(false)}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default GradeCard;

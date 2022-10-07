import React, { useEffect, useState } from "react";
import BidCard from "../components/BidCard/BidCard";
import { MediumTitle } from "../components/Components";
import { FaSearch } from "react-icons/fa";
import "./bid.scss";
import BidModal from "../components/BidModal/BidModal";
import userEvent from "@testing-library/user-event";

const Bid = ({accessToken}) => {
  const [bidModal, setBidModal] = useState(false);
  const [bids, setbids] = useState([]);
  const [user,setuser] = useState(undefined);
  
  const handleClick = () => {
    setBidModal(!bidModal);
  };
  if (!accessToken) {
    window.location = "/mustconnect";
  }
  useEffect(() => {
      fetch(`https://api.fantashop.fr/auction/get/auctions`)
        .then(res => res.json())
        .then(res => {
          setbids(res.auctions)
        })
        fetch("https://api.fantashop.fr/users/getdata/" + accessToken)
        .then(res => res.json())
        .then(res => {
          setuser(res)
        })
      
   
  }, [])

  return (
    <>
      <main className="bid__container">
        <MediumTitle>Enchères</MediumTitle>
        <div className="bid__content">
          <div className="search__bar">
            <FaSearch className="icon" />
            <input type="text" name="search" placeholder="Rechercher un item" />
          </div>
          <div className="bid__content-box">
            {
              bids.map((bid, index) => {
                if (bid.status !== "validation_waiting") {
                  const date1 = new Date();
                  const date2 = new Date(bid.expiredDate)
                  const diff = date2.getTime() - date1.getTime();
                  const diffdate = Math.ceil(diff / (1000 * 60 * 60 * 24));
                  return (
                    <BidCard
                      key={index}
                      accessToken={accessToken}
                      details={bid}
                      diffdate={diffdate}
                    />
                  )
                }
              })
            }
          </div>
          {user && (
            user.discord.roles.includes("861370085787828242")||/*market vip*/
            user.discord.roles.includes("861370081421950977")||/*mvp*/
            user.discord.roles.includes("861370080700137523")||/*mvp+*/
            user.discord.roles.includes("707617942556115004")/*booster*/)
            && <div className="bid__btn">
            <button className="bid__post" onClick={handleClick}>
              <img src="./images/icons/pen.svg" alt="icon" width={60} />
              <span>Crée une enchère</span>
            </button>
          </div>
          }
          
        </div>
      </main>

      {bidModal && <BidModal accessToken={accessToken} bidModal={handleClick} />}
    </>
  );
};

export default Bid;

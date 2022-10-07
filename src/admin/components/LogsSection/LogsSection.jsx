import React from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./logs_section.scss";

const LogsSection = () => {
  const [bids, setbids] = useState([]);
  const [orders, setorders] = useState([]);
  const [items, setitems] = useState([]);
  useEffect(() => {
    fetch("https://api.fantashop.fr/auction/get/auctions")
      .then((res) => res.json())
      .then((data) => {
        setbids(data.auctions);
      });
    fetch("https://api.fantashop.fr/shop/orders/json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setorders(data.reverse());
      });
    fetch("https://api.fantashop.fr/shop/items")
      .then((res) => res.json())
      .then((data) => {
        setitems(data);
      });
  }, []);
  const get_item = (id) => {
    for (let i of items) {
      if (i.id == id) {
        return i.title;
      }
    }
  }
  const get_image = (id) => {
    for (let i of items) {
      if (i.id == id) {
        return i.picture;
      }
    }
  }
  return (
    <section className="logs__section">
      <div className="left">
        <h1>Auctions Logs</h1>
        <div className="actions__container">
          {bids.map((bid,index) => ((
            <div>
              <div className="box" key={index}>
                <p>{bid.author} a mis en enchère "{(bid.item)}"</p>
                <h2>{bid.days}j</h2>
              </div>
            </div>)
          ))}

        </div>
      </div>
      <div className="right">
        <h1>Commandes Logs</h1>
        <div className="actions__container">
          <div>
            {orders && 
              orders.map((order,index) => (

                <div className="box" key={index}>
                  <p>{order['name'] + ""} a commandé {order.quantity} {get_item(parseInt(order.item))}</p>
                  <img
                    className="shadow"
                    src={get_image(parseInt(order.item))}
                    alt=""
                    width={55}
                  />
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </section>
  );
};

export default LogsSection;

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import "./items.scss";
import ItemCard from "../components/ItemCard/ItemCard";
import FilterCard from "../components/FilterCard/FilterCard";

const Items = ({ accessToken }) => {
  const [price, setprice] = useState(5000);

  const [namefilter, setnamefilter] = useState("");

  const [filter, setFilter] = useState(false);

  const [items, setItems] = useState([]);

  const [filtereditems, setfiltereditems] = useState([]);

  const [cache, setcache] = useState({});

  const [user, setUser] = useState(undefined);

  const [farmer, setfarmer] = useState(false);
  const [miner, setminer] = useState(false);
  const [tools, settools] = useState(false);
  const [pvp, setpvp] = useState(false);
  const [machines, setmachines] = useState(false);
  const [various, setvarious] = useState(false);

  const handleFilter = () => {
    setFilter(!filter);
  };
  const handlecloseFilter = () => {
    update();
    setFilter(!filter);
  };

  const onpricechange = (val) => {
    setprice(val.target.value);
    update();
  };
  const onchange = (val) => {
    setnamefilter(val.target.value);
    update();
  };

  const update = () => {
    var filtred = [];

    for (var item of items) {
      if (
        parseInt(item.price) < parseInt(price) &&
        (item.title.includes(namefilter) ||
          item.aliases.includes(namefilter)) &&
        ((!farmer && !miner && !tools && !pvp && !machines && !various) ||
          (farmer && item.category.includes("Farming")) ||
          (miner && item.category.includes("Minerais")) ||
          (tools && item.category.includes("Outils")) ||
          (pvp && item.category.includes("Pvp")) ||
          (machines && item.category.includes("Machines")) ||
          (various && item.category.includes("Divers")))
      ) {
        filtred.push(item);
      }
    }

    setfiltereditems(filtred);
  };

  window.addEventListener("keydown", function (event) {
    if (
      event == null ||
      event.key == null ||
      event == undefined ||
      event.key == undefined
    ) {
      return;
    }
    if (event.key.toLowerCase() == "escape") {
      setFilter(false);
    }
  });
  if (!accessToken) {
    window.location = "/mustconnect";
  }
  useEffect(() => {
    
      setcache({
        farmer: farmer,
        miner: miner,
        tools: tools,
        pvp: pvp,
        machines: machines,
        various: various,
      });
      
      fetch("https://api.fantashop.fr/users/getuser/" + accessToken)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
      fetch(`https://api.fantashop.fr/shop/items`)
        .then((res) => res.json())
        .then((items) => {
          setItems(items);
          setfiltereditems(items);
       
    });
  }, [farmer, miner, tools, pvp, machines, various, accessToken]);

  if (filter === true) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }

  return (
    <>
      <main className="items__container">
        <img
          src="./images/items_banner.png"
          alt="banner"
          style={{ marginBottom: "20px", width: "100%" }}
        />
        <div className="items__content">
          <div className="filter__container">
            <div className="search__bar">
              <FaSearch className="icon" />
              <input
                type="text"
                name="search"
                placeholder="Rechercher un item"
                onChange={onchange}
              />
            </div>
            <div className="filter__button">
              <button onClick={handleFilter}>
                <BiMenuAltLeft className="icon_filter" />
                Trier
              </button>
            </div>
          </div>
          <div className="product__container">
            <div className="product__container-grid">
              {filtereditems.map((item, index) => {
                return (
                  <ItemCard
                    key={index}
                    title={item.title}
                    prix={item.price}
                    img={item.picture}
                    enchants={item['enchantements']}
                    id={item.id}
                    user={user}
                    maxqte={item.maxQuantity}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {filter && (
        <FilterCard
          price={price}
          filter={handlecloseFilter}
          onpricechange={onpricechange}
          farmer={farmer}
          setfarmer={setfarmer}
          miner={miner}
          setminer={setminer}
          tools={tools}
          settools={settools}
          pvp={pvp}
          setpvp={setpvp}
          machines={machines}
          setmachines={setmachines}
          various={various}
          setvarious={setvarious}
        />
      )}
    </>
  );
};

export default Items;
